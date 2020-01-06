import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { Me } from 'src/app/store/model/me';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private BASE_URL = environment.BASE_URL

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<User>
  {
    return this.http.get<User>(this.BASE_URL + '/user')
  }

  put(user: User): Observable<User> {
    return this.http.put<User>(this.BASE_URL + '/user',{ user })
  }

  setMe() {
    return this.http.post<Me>(this.BASE_URL + '/user/me',{ })
  }

  getFavorites(): Observable<Product[]>{
    return this.http.get<Product[]>(this.BASE_URL + '/user/favorite')
  }

  toggleFavorite(product_id : number): Observable<any>{
    return this.http.post(this.BASE_URL + '/product/' + product_id,{})
  }
  
}
