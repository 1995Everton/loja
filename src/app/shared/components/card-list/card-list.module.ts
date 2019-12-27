import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';
import { CardsModule, BadgeModule, WavesModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardListComponent
  ],
  imports: [
    CommonModule,
    CardsModule,
    BadgeModule,
    WavesModule,
    RouterModule
  ],
  exports: [
    CardListComponent
  ]
})
export class CardListModule { }
