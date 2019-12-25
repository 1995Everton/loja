import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { TreeViewListComponent } from './tree-view-list.component';



@NgModule({
  declarations: [
    TreeViewListComponent
  ],
  imports: [
    CommonModule,
    TreeViewModule
  ],
  exports: [
    TreeViewListComponent
  ]
})
export class TreeViewListModule { }
