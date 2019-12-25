import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  categories: Category[]

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.all()
      .subscribe(
        (data: any) => this.categories = data.data,
        error => console.log(error)
      )
  }

  navbar(){
    return this.categoryService.group(this.categories)
  }
}
