import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { IconsModule } from 'angular-bootstrap-md'
import { ButtonsModule } from 'angular-bootstrap-md'
import { CircleLinkModule } from 'src/app/shared/components/circle-link/circle-link.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    ButtonsModule,
    CircleLinkModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
