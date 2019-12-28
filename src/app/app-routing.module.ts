import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { DetailsComponent } from './pages/details/details.component';
import { CartComponent } from './pages/cart/cart.component';


const routes: Routes = [
  { 
    path: 'not-found' , 
    component: NotFoundComponent
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
