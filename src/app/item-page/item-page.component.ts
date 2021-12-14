import { Component, OnInit } from '@angular/core';
import { faCartPlus, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FoodItemsService } from '../food-items.service';
import { FoodItem } from '../interfaces/food-item';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {
  cart = faCartPlus;
  bag = faShoppingBag;
  selectedItem: any = {};
  alsoSearched:FoodItem[] = [];

  constructor(private foodItemsService: FoodItemsService) { 
    this.selectedItem = this.foodItemsService.buyNowItem;
    localStorage.setItem('item', JSON.stringify(this.selectedItem));

    this.alsoSearched = this.foodItemsService.foodItems;
  
    window.onload = (event) => {
      window.scrollTo(0,0);
    }
  }

  ngOnInit(): void {
  }

}
