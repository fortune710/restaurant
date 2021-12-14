import { Component, OnInit } from '@angular/core';
import { FoodItemsService } from '../food-items.service';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartNumber: number = 0;
  cart = faCartArrowDown;

  constructor(private foodItemsService: FoodItemsService) { 
    setInterval(() => {
      this.cartNumber = this.foodItemsService.cartNumber;
    }, 3500);
  }

  ngOnInit(): void {
  }

}
