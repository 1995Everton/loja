import { Component, OnInit } from '@angular/core';
import { UserLocalService } from 'src/app/shared/services/user-local.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

interface Home {
  icon: string
  text: string
  link: string
}

@Component({
  selector: 'app-nav-account',
  templateUrl: './nav-account.component.html',
  styleUrls: ['./nav-account.component.scss']
})
export class NavAccountComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  private cards =[
    {
      icon: 'home',
      link: 'home',
      text: 'Início'
    },
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
  ]

  ngOnInit() {}

  logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }

}
