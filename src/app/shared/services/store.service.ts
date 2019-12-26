import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../models/store';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private BASE_URL = environment.BASE_URL

  constructor(
    private http : HttpClient
  ) { }

  getStore(): Observable<Store[]>{
    return this.http
      .get<Store[]>(this.BASE_URL + '/store')
  }
}
