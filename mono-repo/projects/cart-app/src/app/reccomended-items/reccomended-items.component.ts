import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'shared-lib';

@Component({
  selector: 'app-reccomended-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reccomended-items.component.html',
  styleUrl: './reccomended-items.component.scss'
})
export class ReccomendedItemsComponent implements OnInit{
  items: Array<ProductModel> = [];

  ngOnInit() {
    this.items = [
      {
        id: 1,
        title: 'Gaming Headset with Mic',
        description: 'Gaming Headset with Mic',
        image: 'http://localhost:4202/assets/images/prod1.jpg',
        price: 555,
        rating: 2,
        orders: 66
      },
      {
        id: 2,
        title: 'Apple Watch Series 1 Sport',
        description: 'Apple Watch Series 1 Sport',
        image: 'http://localhost:4202/assets/images/prod1.jpg',
        price: 555,
        rating: 2,
        orders: 66
      },
      {
        id: 3,
        title: 'Men Denim Jeans Shorts',
        description: 'Men Denim Jeans Shorts',
        image: 'http://localhost:4202/assets/images/prod1.jpg',
        price: 555,
        rating: 2,
        orders: 66
      },
      {
        id: 4,
        title: 'Mens T-shirt Cotton Base Layer',
        description: 'Mens T-shirt Cotton Base Layer',
        image: 'http://localhost:4202/assets/images/prod1.jpg',
        price: 555,
        rating: 2,
        orders: 66
      }
    ]
  }

}
