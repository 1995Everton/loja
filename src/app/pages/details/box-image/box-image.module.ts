import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxImageComponent } from './box-image.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    BoxImageComponent
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    BoxImageComponent
  ]
})
export class BoxImageModule { }
