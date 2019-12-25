import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SectionModule } from './section/section.module';
import { CarouselModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SectionModule
  ]
})
export class HomeModule { }
