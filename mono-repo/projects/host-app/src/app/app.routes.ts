import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
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
        path: '**', redirectTo: '/home'
    },
];
