import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Address } from '../models/address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private BASE_URL = environment.BASE_URL + '/address'

  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<Address[]>{
    return this.http.get<Address[]>(this.BASE_URL)
  }
}
