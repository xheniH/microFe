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
        id: 6,
        title: 'Monochrome Ropo Sneakers',
        description: 'Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing',
        image: 'http://localhost:4201/assets/images/prod1.jpg',
        price: 200,
        rating: 4,
        orders: 66
      },
      {
        id: 7,
        title: 'Running Sneakers',
        description: 'Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing',
        image: 'http://localhost:4201/assets/images/prod2.jpg',
        price: 555,
        rating: 2,
        orders: 66
      },
      {
        id: 8,
        title: 'Running Sneakers',
        description: 'Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing',
        image: 'http://localhost:4201/assets/images/prod3.jpg',
        price: 25,
        rating: 6,
        orders: 66
      },
      {
        id: 9,
        title: 'Running Sneakers',
        description: 'Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing',
        image: 'http://localhost:4201/assets/images/prod4.jpg',
        price: 75,
        rating: 88,
        orders: 66
      }
    ]
  }

}
