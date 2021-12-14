import { Component, OnInit } from '@angular/core';
import { FoodItemsService } from '../food-items.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cart: any[] = [];
  totalAmount: number = 0;

  removefromCart(item: any): void {
    let newCart:any[] = [];
    for(let food of this.cart){
      if(food == item)
        continue;
      newCart.push(food);
    }

    this.cart = newCart;
  }

  constructor(private foodItemsService: FoodItemsService) { 
    for (let item of this.foodItemsService.foodItems){
      if(item.addedToCart == true){
        this.cart = [...this.cart, item];
        this.totalAmount += item.price;
      }
    }
  }

  ngOnInit(): void {
  }

}
