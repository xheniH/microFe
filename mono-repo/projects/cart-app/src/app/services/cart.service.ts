import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  loadCartItems() {
    return [
      {
        id: 1,
        title: 'Winter jacket for men and lady',
        description: 'Yellow, Jeans',
        image: 'assets/images/prod1.jpg',
        price: 1156
      },
      // {
      //   id: 2,
      //   title: 'Mens T-shirt Cotton Base',
      //   description: 'Blue, Medium',
      //   image: 'assets/images/prod2.jpg',
      //   price: 50
      // },
      // {
      //   id: 3,
      //   title: 'Blazer Suit Dress Jacket for Men',
      //   description: 'XL size, Jeans, Blue',
      //   image: 'assets/images/prod3.jpg',
      //   price: 250
      // }
    ]
  }
}
