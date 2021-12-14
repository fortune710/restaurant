import { Component, OnInit, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FoodItemsService } from '../food-items.service';
import { FoodItem } from '../interfaces/food-item';

@Component({
  selector: 'card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input('item') foodItem: any;
  cartNumber: number = 0;
  foodItems:any = [];

  cart = faCartPlus;
  heart = faHeart;

  constructor(private foodItemsService: FoodItemsService, private router: Router) {
    this.foodItems = this.foodItemsService.foodItems;

    this.foodItemsService.cartNumber = this.cartNumber;
    setInterval(() => this.setFoodItems(), 10000)
  }

  ngOnInit(): void {
  }

  setFoodItems(): void{
    this.foodItemsService.foodItems = this.foodItems;
    this.foodItemsService.cartNumber = this.cartNumber;
  }

  addToCart(item: any): void {
    if(item.addedToCart === false){

      item.addedToCart = true;
      this.cartNumber++;
      this.foodItemsService.cartNumber = this.cartNumber;
    } else {

      item.addedToCart = false;
      this.cartNumber--;
      this.foodItemsService.cartNumber = this.cartNumber;
    }
  }

  buyNow(item:FoodItem){
    this.foodItemsService.buyNowItem = item;

    this.router.navigateByUrl('/buy-now')
  }

}



@NgModule({
  schemas: [NO_ERRORS_SCHEMA]
})
export class CardModule { }