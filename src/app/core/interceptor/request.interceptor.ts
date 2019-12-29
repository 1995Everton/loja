import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/shared/services/token.service';



@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.tokenService.hasToken()){
      req = req.clone({
        setHeaders: {
          'Authorization': this.tokenService.getToken()
        }
      })
    }
    return next.handle(req)
  }
}
