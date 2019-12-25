import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carousel = [
    'https://dafitistatic-a.akamaihd.net/dynamic_yield/cms/static/kanui/images/26c8008f34313__ate5910extra.jpg',
    'https://dafitistatic-a.akamaihd.net/dynamic_yield/cms/static/kanui/images/36da1fca2afb0__special60com10.jpg'
  ]

  constructor() { }

  ngOnInit() {
  }

}
