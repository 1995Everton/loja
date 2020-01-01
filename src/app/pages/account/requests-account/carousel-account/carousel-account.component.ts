import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-carousel-account',
  templateUrl: './carousel-account.component.html',
  styleUrls: ['./carousel-account.component.scss']
})
export class CarouselAccountComponent implements OnInit {

  @Input() products : Product[] = []

  constructor() { }

  ngOnInit() {
    
  }

}
