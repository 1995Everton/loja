import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AddressService } from 'src/app/shared/services/address.service';
import { Address } from 'src/app/shared/models/address';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from 'angular-bootstrap-md';
import { number, cep } from 'src/app/shared/validations/all.validator';
import { states } from './address-modal.options';



@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.scss']
})
export class AddressModalComponent implements OnInit {

  @ViewChild('frame',null) frame: ModalDirective;

  @Output() reload = new EventEmitter<boolean>()

  addressForm: FormGroup;
  _loading: boolean = false
  states_options = states
  state = 'AC'

  constructor(
    private toastr: ToastrService,
    private addressService: AddressService
  ) { }

  ngOnInit() {
    this.addressForm = new FormGroup({
      street: new FormControl('', Validators.required),
      number: new FormControl('', [Validators.required, number]),
      neighborhood: new FormControl('', [Validators.required, Validators.max(40)]),
      complement: new FormControl('', Validators.required),
      cep: new FormControl('', [Validators.required,cep]),
      city: new FormControl('', Validators.required)
    });
  }

  control (name: string){
    return this.addressForm.get(name);
  }

  error(name: string, error: string): boolean {
    let control = this.control(name)
    return control.hasError(error) && (control.touched || control.dirty)
  }


  register(): void{
    this._loading = true
    let address = this.addressForm.getRawValue() as Address
    address.country = 'Brasil'
    address.state = this.state
    this.addressService
      .add(address)
      .pipe( finalize( () => this._loading = false))
      .subscribe(
        success => {
          this.toastr.success('','Endereço cadastrado com sucesso')
          console.log(success)
          this.frame.hide();
          this.reload.emit(true)
        },
        error => {
          this.toastr.error('','Erro ao cadastrar endereço')
          console.log(error)
        }
      )
  }

}
