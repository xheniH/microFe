import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductModel } from 'shared-lib';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {

  @Input() product: ProductModel | undefined;

  addProductToCart() {
    localStorage.setItem('product',  JSON.stringify(this.product));
  }

}
