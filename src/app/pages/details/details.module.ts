import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { BoxImageModule } from './box-image/box-image.module';
import { OptionsModule } from './options/options.module';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    BoxImageModule,
    OptionsModule
  ]
})
export class DetailsModule { }
