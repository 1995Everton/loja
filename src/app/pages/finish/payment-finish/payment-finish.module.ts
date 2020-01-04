import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentFinishComponent } from './payment-finish.component';
import { NgbTabsetModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule, ButtonsModule, WavesModule, InputsModule, InputUtilitiesModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    PaymentFinishComponent
  ],
  imports: [
    CommonModule,
    NgbTabsetModule,
    IconsModule,
    ButtonsModule,
    WavesModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    InputUtilitiesModule,
    NgbDatepickerModule,
    NgSelectModule
  ]
})
export class PaymentFinishModule { }
