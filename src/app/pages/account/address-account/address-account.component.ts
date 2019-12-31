import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/shared/services/address.service';
import { Paginate } from 'src/app/shared/models/paginate';
import { Address } from 'src/app/shared/models/address';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-address-account',
  templateUrl: './address-account.component.html',
  styleUrls: ['./address-account.component.scss']
})
export class AddressAccountComponent implements OnInit {

  private _address: Address[];
  private _loading = true;
  private _message: string;

  constructor(
    private addressService: AddressService
  ) { }

  ngOnInit() {
    this.getAddress()
  }

  private getAddress():void{
    this._loading = true
    this.addressService
      .all()
      .pipe( finalize( () => this._loading = false) )
      .subscribe(
        (success : any) => this._address = success.data,
        error => {
          this._message = 'Você ainda não possui endereços cadastrados'
          console.log(error)
        }
      )
  }

  private reload(value: boolean):void{
    this.getAddress()
  }

  private delete(id: number):void{
    console.log(id)
  }

  private edit(id: number):void{
    console.log(id)
  }

  get primary (){
    if(!this._address) return []
    return this._address.slice(0,2)
  }

}
