import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule, InputsModule , WavesModule} from 'angular-bootstrap-md';

import { HeaderComponent } from './header.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { NavbarModule } from '../navbar/navbar.module';




@NgModule({
  declarations: [
    HeaderComponent,
    SearchButtonComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    IconsModule,
    InputsModule,
    WavesModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {}
  
