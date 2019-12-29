import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Freight } from '../models/freight';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cep } from '../models/cep';

@Injectable({
  providedIn: 'root'
})
export class PostOfficeService {

  private BASE_URL = environment.BASE_URL + '/post_office'

  constructor(
    private http: HttpClient
  ) { }

  freight(destination: string, quantity: number): Observable<Freight[]>{
    const data = { // Parametros fixos
      origin: "13213-086",
      destination,
      width: 30,
      height: 10,
      length: 20,
      weight: 0.3,
      quantity
    }
    return this.http
      .post<Freight[]>(this.BASE_URL + "/calculate_price",data)
  }

  zipCode(zip_code: string): Observable<Cep>{
    return this.http
      .post<Cep>(this.BASE_URL + "/zip_code",{ zip_code })
  }
}
