import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product.component';
import { TreeViewListModule } from 'src/app/shared/components/tree-view-list/tree-view-list.module';
import { CardListModule } from 'src/app/shared/components/card-list/card-list.module';
import { DropdownListModule } from 'src/app/shared/components/dropdown-list/dropdown-list.module';
import { WavesModule } from 'angular-bootstrap-md';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ListProductComponent
  ],
  imports: [
    CommonModule,
    TreeViewListModule,
    CardListModule,
    DropdownListModule,
    WavesModule,
    NgbPaginationModule
  ]
})
export class ListProductModule { }
