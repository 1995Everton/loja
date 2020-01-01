import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule, CardsModule, TableModule, WavesModule, ButtonsModule, DropdownModule, ModalModule, CarouselModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AccountComponent } from './account.component';
import { NavAccountComponent } from './nav-account/nav-account.component';
import { HomeAccountComponent } from './home-account/home-account.component';
import { PersonalAccountComponent } from './personal-account/personal-account.component';
import { RequestsAccountComponent } from './requests-account/requests-account.component';
import { WishlistAccountComponent } from './wishlist-account/wishlist-account.component';
import { AvatarModule } from 'src/app/shared/components/avatar/avatar.module';
import { AddressAccountModule } from './address-account/address-account.module';
import { CarouselAccountComponent } from './requests-account/carousel-account/carousel-account.component';

@NgModule({
  declarations: [
    AccountComponent,
    HomeAccountComponent,
    NavAccountComponent,
    PersonalAccountComponent,
    RequestsAccountComponent,
    WishlistAccountComponent,
    CarouselAccountComponent,
  ],
  imports: [
    CommonModule,
    IconsModule,
    CardsModule,
    RouterModule,
    AvatarModule,
    NgxSkeletonLoaderModule,
    TableModule,
    WavesModule,
    ButtonsModule,
    DropdownModule,
    AddressAccountModule,
    ModalModule,
    CarouselModule
  ]
})
export class AccountModule { }
