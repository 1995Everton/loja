import { Component, OnInit } from '@angular/core';
import { UserLocalService } from 'src/app/shared/services/user-local.service';
import { Router } from '@angular/router';

interface Home {
  icon: string
  text: string
  link: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home-account.component.html',
  styleUrls: ['./home-account.component.scss']
})
export class HomeAccountComponent implements OnInit {

  constructor(
    private router: Router,
    private userLocalService: UserLocalService
  ) { }

  ngOnInit() {}

  logout(){
    this.userLocalService.logout()
    this.router.navigate(['/login'])
  }

  get cards(): Home[]{
    return [
      {
        icon: 'shopping-bag',
        link: 'requests',
        text: 'Meus Pedidos'
      },
      {
        icon: 'heart',
        link: 'wishlist',
        text: 'Meus Favoritos'
      },
      {
        icon: 'user-circle',
        link: 'personal',
        text: 'Informações da Conta'
      },
      {
        icon: 'map-marker-alt',
        link: 'address',
        text: 'Meus Endereços'
      }
    ] as Home[]
  }

}
