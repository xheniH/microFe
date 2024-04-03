import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  // TODO: model
  products: Array<any> = [];

  constructor() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = [
      {
        id: 1,
        title: 'Winter jacket for men and lady',
        description: 'Yellow, Jeans',
        image: 'assets/images/prod1.jpg',
        price: 1156
      },
      {
        id: 2,
        title: 'Mens T-shirt Cotton Base',
        description: 'Blue, Medium',
        image: 'assets/images/prod2.jpg',
        price: 50
      },
      {
        id: 3,
        title: 'Blazer Suit Dress Jacket for Men',
        description: 'XL size, Jeans, Blue',
        image: 'assets/images/prod3.jpg',
        price: 250
      }
    ]
  }

  removeProductFromCart(id: number): void {
    this.products = this.products.filter((prod) => prod.id !== id);
  }
}
