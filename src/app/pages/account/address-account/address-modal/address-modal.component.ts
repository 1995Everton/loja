import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AddressService } from 'src/app/shared/services/address.service';
import { Address } from 'src/app/shared/models/address';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from 'angular-bootstrap-md';

interface States {
  name: string,
  abbr: string
}

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss']
})
export class AddressModalComponent implements OnInit {

  @ViewChild('frame',null) frame: ModalDirective;

  addressForm: FormGroup;
  _loading: boolean = false

  constructor(
    private toastr: ToastrService,
    private addressService: AddressService
  ) { }

  ngOnInit() {
    this.addressForm = new FormGroup({
      street: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      neighborhood: new FormControl('', Validators.required),
      complement: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state:  new FormControl('', Validators.required),
    });
  }

  get street() {
    return this.addressForm.get('street');
  }

  get number() {
    return this.addressForm.get('number');
  }

  get neighborhood() {
    return this.addressForm.get('neighborhood');
  }

  get complement() {
    return this.addressForm.get('complement');
  }

  get cep() {
    return this.addressForm.get('cep');
  }

  get city() {
    return this.addressForm.get('city');
  }

  get state() {
    return this.addressForm.get('state');
  }

  register(): void{
    this._loading = true
    let address = this.addressForm.getRawValue() as Address
    address.country = 'Brasil'
    this.addressService
      .add(address)
      .pipe( finalize( () => this._loading = false))
      .subscribe(
        success => {
          this.toastr.success('','Endereço cadastrado com sucesso')
          console.log(success)
          this.frame.hide();
        },
        error => {
          this.toastr.error('','Erro ao cadastrar endereço')
          console.log(error)
        }
      )
  }


}
