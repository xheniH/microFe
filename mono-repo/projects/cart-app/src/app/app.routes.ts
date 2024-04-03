import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    { path: '', redirectTo: '/cart', pathMatch: 'full' },
    { path: 'cart', component: CartComponent }
];
