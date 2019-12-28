import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalCartService {

  private _userSubject = new BehaviorSubject<Product[]>(null)
  private _key = 'cart'

  constructor() { }

  add(product: Product){
    let string = this.get()
    string.push(product)
    this.set(string)
    this._userSubject.next(this.get())
  }

  getItems(): Observable<Product[]>{
    return this._userSubject
      .asObservable()
      .pipe(startWith(this.get()))
  }

  remove(id): void{
    let string = this.get()
    string = string.filter( product => product.id = id)
    this.set(string)
    this._userSubject.next(this.get())
  }

  clean(){
    window.localStorage.removeItem(this._key)
    this._userSubject.next(this.get())
  }

  private set(products: Product[]):void{
    let value = JSON.stringify(products);
    window.localStorage.setItem(this._key,value)
  }

  private get() :Product[] {
    let string = window.localStorage.getItem(this._key)
    if(string){
      return JSON.parse(string)
    }else{
      return []
    }
  }
}
