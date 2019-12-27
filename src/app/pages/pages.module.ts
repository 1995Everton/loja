import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ListProductModule } from './list-product/list-product.module';
import { ErrorsModule } from './errors/errors.module';
import { DetailsModule } from './details/details.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ListProductModule,
    ErrorsModule,
    DetailsModule
  ]
})
export class PagesModule { }
