import { Injectable } from '@angular/core';
import { CartItemModel } from '../models/cartItem.model';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, map, tap } from 'rxjs';
import { ProductModel } from 'shared-lib';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private auth: AuthService
  ) { }

  loadCartItems(): Observable<Array<CartItemModel>> {
    return this.auth.isAuthenticated$
    .pipe(
      map((res)=> {
          const itemsSavedByUser = res ? this.loadSavedItems() : [];
          const storedItems: Array<ProductModel> = JSON.parse(localStorage.getItem('addedItems') || '[]');
          storedItems.forEach((product: ProductModel) => {
            const productInCart = itemsSavedByUser.find((item: CartItemModel)=> item.product.id === product.id);
            if (!productInCart) {
              itemsSavedByUser.push({
                quantity: 1,
                product
              })
            }
          });
          return itemsSavedByUser;
      })
    );

  }

  loadSavedItems(): Array<CartItemModel> {
    return [
      {
        quantity: 2,
        product: {
          id: 1,
          title: 'Winter jacket for men and lady',
          description: 'Yellow, Jeans',
          image: 'http://localhost:4202/assets/images/prod1.jpg',
          price: 200,
          rating: 4,
          orders: 152
        }
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

