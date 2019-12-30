import { Component, OnInit } from '@angular/core';
import { LocalCartService } from 'src/app/shared/services/local-cart.service';
import { Product } from 'src/app/shared/models/product';
import { UserLocalService } from 'src/app/shared/services/user-local.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  
  logo: string = 'https://static.dafiti.com.br/images/kanui/logo-kanui.png'

  constructor(
    private userLocalService: UserLocalService
  ) { }

  ngOnInit() {
    
  }

  get isLogged(): boolean {
    return this.userLocalService.isLogged()
  }

  get username(): string {
    return this.userLocalService.userName()
  }


}
