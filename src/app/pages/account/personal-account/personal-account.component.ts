import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user';
import { finalize } from 'rxjs/operators';


interface UserGrid {
  title: string
  text: string
}

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.scss']
})
export class PersonalAccountComponent implements OnInit {

  private _user: User;
  public _loading = true;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService
      .get()
      .pipe( finalize( () => this._loading = false))
      .subscribe(
        success => this._user = success,
        error => console.log(error)
      )
  }

  get name(): string{
    if(!this._user) return ''
    return this._user.name
  }

  get user (): UserGrid[]{
    if(!this._user) return []
    return [
      {
        title: 'E-Mail',
        text: this._user.email
      },
      {
        title: 'Sexo',
        text: this._user.genre ? /m/i.test(this._user.genre) ? 'Masculino' : 'Feminino' : 'Não Informado'
      },
      {
        title: 'CPF',
        text: this._user.cpf || 'Não Informado'
      },
      {
        title: 'RG',
        text: this._user.rg || 'Não Informado'
      },
      {
        title: 'Telefone',
        text: this._user.telephone || 'Não Informado'
      }
    ]
  }

}
