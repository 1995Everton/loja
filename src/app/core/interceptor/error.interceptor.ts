import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserLocalService } from 'src/app/shared/services/user-local.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
      private router: Router,
      private userLocalService: UserLocalService,
      private toestr : ToastrService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
              this.userLocalService.logout()
              this.toestr.error('Por Favor, faça login novamente','Sessão Expirada',{
                timeOut: 10000
              })
              this.router.navigate(['/login'])
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}