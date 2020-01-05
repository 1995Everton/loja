import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from "jwt-decode";
import { TokenService } from './token.service';
import { UserToken } from '../models/user-token';

@Injectable({
  providedIn: 'root'
})
export class UserLocalService implements OnInit {


  private _userSubject = new BehaviorSubject<UserToken>(null)
  private _loggedSubject = new BehaviorSubject<boolean>(this.isLogged())

  constructor(
    private tokenService : TokenService
  ) { }

  ngOnInit(): void {
    if(this.tokenService.hasToken()) this.decodeAndNotify()
  }

  public setToken(token: string): void{
    this.tokenService.setToken(token)
    this.decodeAndNotify()
  }

  public getUser(): Observable<UserToken>{
    return this._userSubject.asObservable()
  }

  public isLogged(): boolean{
    return this.tokenService.hasToken()
  }

  public isLoggedObservable(): Observable<boolean>{
    return this._loggedSubject.asObservable()
  }

  public userName(): string {
    return this.decode().name
  }

  public userId(): number {
    return this.decode().id
  }

  public logout(): void {
    this._loggedSubject.next(false)
    this.tokenService.removeToken()
  }

  private decodeAndNotify():void {
    this._loggedSubject.next(this.isLogged())
    this._userSubject.next(this.decode())
  }

  private decode(): UserToken{
    const token = this.tokenService.getToken()
    const user = jwtDecode(token) as UserToken
    return user ||  {} as UserToken
  }
}
