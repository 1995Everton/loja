import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Request } from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private BASE_URL = environment.BASE_URL

  constructor(private http: HttpClient) { }

  all(): Observable<Request[]>{
    return this.http.get<Request[]>(this.BASE_URL + '/request')
  }

  create(request: Request){
    return this.http.post(this.BASE_URL + '/request',{ ...request })
  }
}
