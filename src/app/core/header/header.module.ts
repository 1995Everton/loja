import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { IconsModule, InputsModule } from 'angular-bootstrap-md';
import { SearchButtonComponent } from './search-button/search-button.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SearchButtonComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    InputsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {}
  
