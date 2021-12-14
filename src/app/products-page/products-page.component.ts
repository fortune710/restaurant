import { Component, OnInit } from '@angular/core';
import { CardsComponent} from '../cards/cards.component';
import { FoodItemsService } from '../food-items.service';
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  breakfast: any[] = [];
  lunch: any[] = [];

  constructor(private foodItemsService: FoodItemsService) {
    for(let item of this.foodItemsService.foodItems){

      if(item.category == 'breakfast'){
        this.breakfast.push(item)
      } else if(item.category == 'lunch'){
        this.lunch.push(item)
      }
    }
  }

  ngOnInit(): void {
  }

}
