import { Component, OnInit } from '@angular/core';
import { FoodItemsService } from '../food-items.service';
import { faHamburger, faCartPlus, faCreditCard, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //FA Icons
  cart = faCartPlus;
  burger = faHamburger;
  pin = faMapMarkerAlt;
  card = faCreditCard;

  words = ['delight', 'healthy eating', 'made with love', 'our way of life',]
  selectedWord: string = '';
  cartNumber: any;
  foodItems: any[] = [];

  
  constructor(private foodItemsService: FoodItemsService) { 
    for(let i = 0; i < 3; i++){
      this.foodItems = [...this.foodItems, this.foodItemsService.foodItems[i]];
    }
    
    this.selectedWord = this.words[3];
    this.cartNumber = this.foodItemsService.cartNumber;
    
  }

  ngOnInit(): void {
  }

}
