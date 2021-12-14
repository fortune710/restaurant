import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faHome, faShoppingBasket, faCross } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {
  bars = faBars;
  home = faHome;
  basket = faShoppingBasket;
  cross = faCross;

  popupActive:boolean = false;

  openPopup(){
    return !this.popupActive;
  }

  goHome(){
    this.router.navigateByUrl('')
  }

  goProducts(){
    this.router.navigateByUrl('/products');
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
