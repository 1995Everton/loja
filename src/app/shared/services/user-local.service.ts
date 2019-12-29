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
  private _user: UserToken

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

  public userName(): string {
    return this._user.name
  }

  public userId(): number {
    return this._user.id
  }

  private decodeAndNotify():void {
    const token = this.tokenService.getToken()
    const user = jwtDecode(token) as UserToken
    this._user = user
    this._userSubject.next(user)
  }

}
