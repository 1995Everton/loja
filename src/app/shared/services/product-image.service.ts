import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductImage } from '../models/product-image';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paginate } from '../models/paginate';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {

  private params = new HttpParams()

  private BASE_URL = environment.BASE_URL

  constructor(
    private http: HttpClient
  ) { }

  allImageProduct(product_id: number): Observable<Paginate> {
    const params = this.params
      .set('per_page','10000')
      .set('where', JSON.stringify({product_id}));
    return this.http
    .get<Paginate>(this.BASE_URL + '/product-image',{ params })
  }
}
