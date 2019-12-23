import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleLinkComponent } from './circle-link.component';



@NgModule({
  declarations: [
    CircleLinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CircleLinkComponent
  ]
})
export class CircleLinkModule { }
