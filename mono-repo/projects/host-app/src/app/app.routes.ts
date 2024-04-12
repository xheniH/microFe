import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {
        path: '', redirectTo: '/products', pathMatch: 'full'
    },
    {
        path: 'cart',
        loadComponent: () =>
            loadRemoteModule('cartApp', './Component').then((m) => m.CartComponent)
    },
    {
        path: 'products',
        loadComponent: () =>
            loadRemoteModule('productApp', './Component').then((m) => m.ProductsListComponent)
    },
    {
        path: '**', redirectTo: '/products'
    },
];
