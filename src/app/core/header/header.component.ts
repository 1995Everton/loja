import { Component, OnInit } from '@angular/core';
import { LocalCartService } from 'src/app/shared/services/local-cart.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  
  logo: string = 'https://static.dafiti.com.br/images/kanui/logo-kanui.png'

  constructor(
    
  ) { }

  ngOnInit() {
    
  }


}
