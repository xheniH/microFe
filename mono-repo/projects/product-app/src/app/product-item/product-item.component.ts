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
    const storedItems: Array<ProductModel> = JSON.parse(localStorage.getItem('addedItems') || '[]');
    const foundItem = storedItems.find(item => item.id === this.product?.id);
    if (foundItem) {
      alert('Product is already added to cart!');
      return;
    } 
      
    if (this.product) {
      const updatedItems = [...storedItems, this.product];
      localStorage.setItem('addedItems', JSON.stringify(updatedItems));
    } else {
      alert('Unable to add product to cart. Product information missing.');
      return;
    }

    alert('Product added to cart!');
  }

}
