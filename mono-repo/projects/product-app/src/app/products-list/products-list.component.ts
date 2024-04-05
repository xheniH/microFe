import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductModel } from 'shared-lib';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products: Array<ProductModel> = [];

  constructor() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = [
      {
        id: 1,
        title: 'Winter jacket for men and lady',
        description: 'Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing',
        image: 'http://localhost:4202/assets/product-app/prod1.jpg',
        price: 1156
      },
      {
        id: 2,
        title: 'Mens T-shirt Cotton Base',
        description: 'Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing',
        image: 'http://localhost:4202/assets/product-app/prod2.jpg',
        price: 50
      },
      {
        id: 3,
        title: 'Blazer Suit Dress Jacket for Men',
        description: 'Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing',
        image: 'http://localhost:4202/assets/product-app/prod3.jpg',
        price: 250
      }
    ]
  }

  addProductToCart(product: ProductModel) {
    console.log('xhenii');
    const addToCartEvent = new CustomEvent('addToCartEvent', { detail: product });
    window.dispatchEvent(addToCartEvent);
  }
}
