import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { CardsModule } from 'angular-bootstrap-md';
import { CardSectionComponent } from './card/card-section.component';



@NgModule({
  declarations: [
    SectionComponent,
    CardSectionComponent
  ],
  imports: [
    CommonModule,
    CardsModule
  ],
  exports: [
    SectionComponent
  ]
})
export class SectionModule { }
