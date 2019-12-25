import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownListComponent } from './dropdown-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DropdownListComponent
  ],
  imports: [
    CommonModule,
    FormsModule      
  ],
  exports: [
    DropdownListComponent
  ]
})
export class DropdownListModule { }
