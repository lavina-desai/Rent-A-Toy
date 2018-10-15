import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  links = [
    { "label": "Home", "url": "/about-us", "icon": "home" },
    { "label": "Summary", "url": "signin", "icon": "dashboard" },
    { "label": "Packing List", "url": "signup", "icon": "format_list_bulleted" },
    { "label": "Dispatch", "url": "about-us", "icon": "local_shipping" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
