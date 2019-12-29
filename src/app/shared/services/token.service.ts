import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _key: string = 'token'

  public hasToken(): boolean{
    return !!this.getToken()
  }
  public setToken(token: string): void{
    window.localStorage.setItem(this._key ,token)
  }
  public getToken(): string{
    return window.localStorage.getItem(this._key)
  }
  public removerToken(): void{
    window.localStorage.removeItem(this._key)
  }

}
