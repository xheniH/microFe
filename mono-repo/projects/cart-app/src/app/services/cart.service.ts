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
          title: 'Winter jacket',
          description: 'Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing',
          image: 'http://localhost:4202/assets/images/prod1.jpg',
          price: 1156,
          rating: 5,
          orders: 125
        }
      },
    ]
  }
}

