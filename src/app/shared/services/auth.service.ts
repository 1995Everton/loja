import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { UserLocalService } from './user-local.service';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = environment.BASE_URL

  constructor(
    private store: Store,
    private userLocalService: UserLocalService,
    private http: HttpClient
  ) { }

  authenticade(email: string, password: string): Observable<any>{
    return this.http
      .post(this.BASE_URL + '/login',{ email, password })
      .pipe( tap( response => {
        this.userLocalService.setToken(response.access_token)
      }))
  }

  public logout(): void {
    this.userLocalService.logout()
  }

}
