import { Injectable } from '@angular/core';
import { ProductModel } from 'shared-lib';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  loadProducts(): Array<ProductModel> {
    return [
        {
          id: 1,
          title: 'Winter jacket for men and lady',
          description: 'Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing',
          image: 'http://localhost:4202/assets/images/prod1.jpg',
          price: 1156,
          rating: 3,
          orders: 125
        },
        {
          id: 2,
          title: 'Mens T-shirt Cotton Base',
          description: 'Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing',
          image: 'http://localhost:4202/assets/images/prod2.jpg',
          price: 50,
          rating: 4,
          orders: 158
        },
        {
          id: 3,
          title: 'Blazer Suit Dress Jacket for Men',
          description: 'Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing',
          image: 'http://localhost:4202/assets/images/prod3.jpg',
          price: 250,
          rating: 5,
          orders: 222
        }
      ]
  }
}
