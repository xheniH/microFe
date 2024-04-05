import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  // TODO: model
  products: Array<any> = [];

  test: string = 'test';

  constructor(
    private cartService: CartService
  ) {   
    window.addEventListener('addToCartEvent', (e: any) => {
      this.addCartItem(e.detail);
    });
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.cartService.loadCartItems();
  }

  removeProductFromCart(id: number): void {
    this.products = this.products.filter((prod) => prod.id !== id);
  }

  addCartItem(data: any): void {
    // this.products.push(data);
    this.test = 'xhen'
    console.error('test', this.test);
  }
}
