import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationFinishComponent } from './confirmation-finish.component';
import { IconsModule, CardsModule, ButtonsModule, WavesModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    ConfirmationFinishComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    CardsModule,
    ButtonsModule,
    WavesModule
  ]
})
export class ConfirmationFinishModule { }
