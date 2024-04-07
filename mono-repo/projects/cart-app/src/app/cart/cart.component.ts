import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartItemModel } from '../models/cartItem.model';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CheckoutComponent],
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
    this.loadProducts();

    this.itemQuantityControl.valueChanges.subscribe(value => {
      // this.changeItemQuantity(value);
    });
    
    const productToSave = localStorage.getItem('product');

    if (productToSave) {
      this.addCartItem(JSON.parse(productToSave));
    }

  }

  loadProducts(): void {
    this.cartItems = this.cartService.loadCartItems();
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((acc, obj) =>  acc + obj.product.price * obj.quantity, 0);
    console.error('hyhy', this.totalPrice);

  }

  removeProductFromCart(id: number): void {
    // this.cartItems = this.cartItems.filter((prod) => prod.id !== id);
  }

  addCartItem(data: any): void {
    // this.products.push(data);
    localStorage.removeItem('product');
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

