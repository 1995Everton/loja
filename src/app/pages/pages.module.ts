import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ListProductModule } from './list-product/list-product.module';
import { ErrorsModule } from './errors/errors.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ListProductModule,
    ErrorsModule
  ]
})
export class PagesModule { }
