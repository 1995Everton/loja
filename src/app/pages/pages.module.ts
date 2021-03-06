import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ListProductModule } from './list-product/list-product.module';
import { ErrorsModule } from './errors/errors.module';
import { DetailsModule } from './details/details.module';
import { CartModule } from './cart/cart.module';
import { LoginModule } from './login/login.module';
import { AccountModule } from './account/account.module';
import { FinishModule } from './finish/finish.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ListProductModule,
    ErrorsModule,
    DetailsModule,
    CartModule,
    LoginModule,
    AccountModule,
    FinishModule
  ]
})
export class PagesModule { }
