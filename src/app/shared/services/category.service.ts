import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private BASE_URL = environment.BASE_URL

  constructor(private http: HttpClient) { }

  all(): Observable<Category[]>{
    return this.http.get<Category[]>(this.BASE_URL + '/category?per_page=1000')
  }

  group(categories: Category[]): Category[] {
    if(!categories) return []
    const headers = this.order(categories.filter( category => !category.category_id))
    for (const header of headers) {
      header.sub_category = this.order(categories.filter( _category => _category.category_id == header.id))
      for (const sub_header_itens of header.sub_category) {
        sub_header_itens.sub_category = this.order(categories.filter( _category => _category.category_id == sub_header_itens.id))
      }
    }
    return headers
  }

  private order(categories: Category[]): Category[]{
    return categories.sort( (a , b) => {
     if(a.order > b.order) return 1
     if(a.order < b.order) return -1
     return 0
    })
  }
}
