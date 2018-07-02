import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  links = [
    { "label": "Popular Products", "url": "", "icon": "add_shopping_cart" },
    { "label": "Search by", "url": "", "icon": "search" },
    { "label": "Cart", "url": "", "icon": "shopping_cart" },
    { "label": "About Us", "url": "/about-us", "icon": "supervisor_account" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
