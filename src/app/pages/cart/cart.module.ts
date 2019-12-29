import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ButtonsModule, WavesModule, InputsModule, CheckboxModule, IconsModule } from 'angular-bootstrap-md';
import { CellsComponent } from './cells/cells.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartComponent,
    CellsComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    WavesModule,
    NgSelectModule,
    FormsModule,
    InputsModule,
    CheckboxModule,
    IconsModule
  ]
})
export class CartModule { }
