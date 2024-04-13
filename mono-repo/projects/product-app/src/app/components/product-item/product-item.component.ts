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
    const storedProducts: Array<ProductModel> = JSON.parse(localStorage.getItem('storedProducts') || '[]');
    const foundProduct = storedProducts.find((storedProduct: ProductModel) => storedProduct.id === this.product?.id);
    if (foundProduct) {
      alert('Product is already added to cart!');
      return;
    }
    if (this.product) {
      const updatedProducts = [...storedProducts, this.product];
      localStorage.setItem('storedProducts', JSON.stringify(updatedProducts));
    } else {
      alert('Unable to add product to cart. Product information missing.');
      return;
    }
    alert('Product added to cart!');
  }

}
