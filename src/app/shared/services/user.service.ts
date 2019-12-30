import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

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
}
