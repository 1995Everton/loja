import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';
import { CardsModule, BadgeModule, WavesModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    CommonModule,
    CardsModule,
    BadgeModule,
    WavesModule
  ],
  exports: [
    CardListComponent
  ]
})
export class CardListModule { }
