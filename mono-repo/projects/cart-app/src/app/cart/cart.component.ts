import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartItemModel } from '../models/cartItem.model';
import { CheckoutComponent } from '../checkout/checkout.component';
import { ReccomendedItemsComponent } from '../reccomended-items/reccomended-items.component';
import { tap } from 'rxjs';
import { ProductModel } from 'shared-lib';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CheckoutComponent, ReccomendedItemsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  cartItems: Array<CartItemModel> = [];

  itemQuantityControl: FormControl = new FormControl(1);

  totalPrice: number = 0;

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.cartService.loadCartItems().
      pipe(
        tap((res: Array<CartItemModel>) => {
          this.cartItems = res;
          this.calculateTotalPrice();
        })
      )
      .subscribe();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((acc, obj) =>  acc + obj.product.price * obj.quantity, 0);
  }

  removeProductFromCart(id: number | undefined): void {
    if (id) {
      this.cartItems = this.cartItems.filter((item) => item.product.id !== id);
      let storedItems: Array<ProductModel> = JSON.parse(localStorage.getItem('addedItems') || '[]');
      storedItems = storedItems.filter((item) => item.id !== id);
      localStorage.setItem('addedItems', JSON.stringify(storedItems));
    }
  }

  changeItemQuantity(itemId: number | undefined, type: string): void {
    const itemToChange = this.cartItems.find((item: CartItemModel) => item.product.id === itemId);
    if (itemToChange) {
      itemToChange.quantity = (type ==='decrease') ? itemToChange.quantity - 1 : itemToChange.quantity + 1;
      itemToChange.product.price;
      itemToChange.totalPrice = itemToChange.product.price * itemToChange.quantity;
      this.calculateTotalPrice();
    }
  }

}

