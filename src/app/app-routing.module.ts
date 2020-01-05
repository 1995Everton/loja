import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './core/guard/login.guard';
import { AuthGuard } from './core/guard/auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { DetailsComponent } from './pages/details/details.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';

import { AccountComponent } from './pages/account/account.component';
import { HomeAccountComponent } from './pages/account/home-account/home-account.component';
import { WishlistAccountComponent } from './pages/account/wishlist-account/wishlist-account.component';
import { RequestsAccountComponent } from './pages/account/requests-account/requests-account.component';
import { PersonalAccountComponent } from './pages/account/personal-account/personal-account.component';
import { AddressAccountComponent } from './pages/account/address-account/address-account.component';
import { FinishComponent } from './pages/finish/finish.component';
import { PaymentFinishComponent } from './pages/finish/payment-finish/payment-finish.component';
import { ConfirmationFinishComponent } from './pages/finish/confirmation-finish/confirmation-finish.component';
import { FinishGuard } from './core/guard/finish.guard';


const routes: Routes = [
  { 
    path: 'not-found' , 
    component: NotFoundComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[
      LoginGuard
    ]
  },
  {
    path: 'finish',
    component: FinishComponent,
    canActivate:[
      AuthGuard,
      FinishGuard
    ],
    children: [ 
      {
        path: 'payment',
        component: PaymentFinishComponent,
      },
      {
        path: 'confirmation',
        component: ConfirmationFinishComponent,
      }
    ]
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate:[
      AuthGuard
    ],
    children: [
      {
        path: 'home',
        component: HomeAccountComponent,
      },
      {
        path: 'requests',
        component: RequestsAccountComponent,
      },
      {
        path: 'wishlist',
        component: WishlistAccountComponent,
      },
      
      {
        path: 'personal',
        component: PersonalAccountComponent,
      },
      {
        path: 'address',
        component: AddressAccountComponent,
      }
    ]
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: ':category',
    component: HomeComponent
  },
  {
    path: ':category/:sub_category',
    component: ListProductComponent
  },
  { 
    path: '**' , 
    redirectTo: 'not-found'
  },
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
