import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule, InputsModule , WavesModule, PopoverModule, BadgeModule} from 'angular-bootstrap-md';

import { HeaderComponent } from './header.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { NavbarModule } from '../navbar/navbar.module';
import { CartComponent } from './cart/cart.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SearchButtonComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    IconsModule,
    InputsModule,
    WavesModule,
    PopoverModule,
    BadgeModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {}
  
