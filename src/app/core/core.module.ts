import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header.component';
import { FooterModule } from './footer/footer.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarModule } from './navbar/navbar.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RequestInterceptor } from './interceptor/request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    NavbarModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
