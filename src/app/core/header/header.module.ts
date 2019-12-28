import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule, InputsModule , WavesModule, PopoverModule, BadgeModule} from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { NavbarModule } from '../navbar/navbar.module';
import { PopCartComponent } from './cart/pop-cart.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SearchButtonComponent,
    PopCartComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    IconsModule,
    InputsModule,
    WavesModule,
    PopoverModule,
    BadgeModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {}
  
