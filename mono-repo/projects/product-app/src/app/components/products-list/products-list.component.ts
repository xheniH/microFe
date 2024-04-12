import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'shared-lib';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit{
  products: Array<ProductModel> = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.productsService.loadProducts();
  }
}
