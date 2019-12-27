import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { OptionsComponent } from './options.component';
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    OptionsComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ButtonsModule,
    IconsModule,
    WavesModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    OptionsComponent
  ]
})
export class OptionsModule { }
