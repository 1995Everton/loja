import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsModule, InputUtilitiesModule, ButtonsModule, CardsModule, WavesModule, CheckboxModule} from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    InputsModule,
    ButtonsModule,
    CheckboxModule,
    CardsModule,
    WavesModule,
    InputUtilitiesModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class LoginModule { }
