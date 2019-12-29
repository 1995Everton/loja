import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AddressService } from 'src/app/shared/services/address.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',Validators.required]
    })
  }

  login(){
    const email = this.loginForm.get('email').value
    const password = this.loginForm.get('password').value
    this.authService
      .authenticade(email,password)
      .subscribe(
        success => {
          this.toastr.success('','Logado com sucesso!')
          this.router.navigate(['/home'])
          console.log(success)
        },
        error => {
          this.toastr.error('','E-mail ou senha incorretos!')
        }
      )

  }

}
