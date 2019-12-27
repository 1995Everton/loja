import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BASE_URL = environment.BASE_URL

  private params = new HttpParams()

  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<Product[]>{
    return this.http.get<Product[]>(this.BASE_URL + "/product")
  }

  paginated(category_id : number, page: number, per_page = 10): Observable<Product[]>{
   
    const params = this.params
      .set('page',page.toString())
      .set('per_page',per_page.toString())
      .set('where', JSON.stringify({category_id}));
    return this.http
      .get<Product[]>(this.BASE_URL + "/product",{ params })
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(this.BASE_URL + "/product/"+ id)
  }
}
