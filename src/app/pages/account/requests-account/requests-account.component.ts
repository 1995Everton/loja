import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { Request } from 'src/app/shared/models/request';
import { finalize } from 'rxjs/operators';
import * as moment from "moment";

@Component({
  selector: 'app-requests-account',
  templateUrl: './requests-account.component.html',
  styleUrls: ['./requests-account.component.scss']
})
export class RequestsAccountComponent implements OnInit {

  private _request: Request[]
  private _message: string;
  private _loading: boolean;
  imagesUrl: string[];

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.getRequest()
  }

  formatDate(data: string): string{
    return moment(data).utc().format('DD/MM/YYYY')
  }

  formatMoney(value: number): string{
    return "R$ " + (value).toLocaleString('pt-BR')
  }
  getRequest() {
    this._loading = true
    this.requestService
      .all()
      .pipe( finalize( () => this._loading = false))
      .subscribe(
        (success: any) => this._request = success.data,
        error => this._message = 'Você ainda não possui pedidos'
      )
  }

}
