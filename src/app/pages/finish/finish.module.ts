import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

import { FinishComponent } from './finish.component';
import { StepperFinishComponent } from './stepper-finish/stepper-finish.component';
import { PaymentFinishModule } from './payment-finish/payment-finish.module';
import { ConfirmationFinishModule } from './confirmation-finish/confirmation-finish.module';



@NgModule({
  declarations: [
    FinishComponent,
    StepperFinishComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    PaymentFinishModule,
    ConfirmationFinishModule
  ]
})
export class FinishModule { }
