import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgSelectModule } from '@ng-select/ng-select';
import { 
  IconsModule, 
  CardsModule,
  TableModule, 
  WavesModule, 
  ButtonsModule, 
  DropdownModule,
  ModalModule,
  TooltipModule, 
  PopoverModule,
  InputUtilitiesModule,
  InputsModule
} from 'angular-bootstrap-md';

import { AvatarModule } from 'src/app/shared/components/avatar/avatar.module';
import { AddressAccountComponent } from './address-account.component';
import { AddressModalComponent } from './address-modal/address-modal.component';


@NgModule({
  declarations: [
    AddressAccountComponent,
    AddressModalComponent,
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
    ModalModule,
    TooltipModule, 
    PopoverModule,
    FormsModule, 
    ReactiveFormsModule,
    InputUtilitiesModule,
    InputsModule,
    NgSelectModule
  ]
})
export class AddressAccountModule { }
