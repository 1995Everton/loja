import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { number, cpf_cnpf } from 'src/app/shared/validations/all.validator';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { UpdateStages } from 'src/app/store/actions/stages.action';
import { StagesType } from 'src/app/store/model/stages';
import { LocalCartService } from 'src/app/shared/services/local-cart.service';
import { Product } from 'src/app/shared/models/product';
import { map } from 'rxjs/operators';
import { MeState } from 'src/app/store/state/me.state';
import { Me } from 'src/app/store/model/me';
import { PostOfficeService } from 'src/app/shared/services/post-office.service';

interface Billet {
  text: string,
  value: number,
  color: string
}

interface Installment {
  text: string,
  amount: number
}

@Component({
  selector: 'app-payment-finish',
  templateUrl: './payment-finish.component.html',
  styleUrls: ['./payment-finish.component.scss'],
  
})
export class PaymentFinishComponent implements OnInit {

  private cardForm : FormGroup
  private tab = 'Boleto'
  private date_validate:any
  private itens: Installment[] = []
  private products: Product[] = []
  private freight_price = 0
  
  @Select(MeState.getMeList) auth$: Observable<Me>;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store,
    private localCartService: LocalCartService,
    private postOfficeService: PostOfficeService
  ) { }

  ngOnInit() {
    this.setForm()
    this.getCart()
    this.getAddress()
  }

  setForm(){
    this.cardForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['',
        [
          Validators.required,
          number
        ]
      ],
      date: [''],
      security_code:['',
        [
          Validators.required,
          number
        ]
      ],
      cpf:['',
        [
          Validators.required,
          cpf_cnpf
        ]
      ],
      installment: [1]
    })
  }

  getCart(){
    this.localCartService
      .getItems()
      .pipe( map( (item: Product[]) => this.localCartService.totalize(item)))
      .subscribe(
        item => {
          this.products = item
        }
      )
  }

  getAddress(){
    this.auth$.subscribe(
      (auth: Me) => {
        if(auth.address && auth.address[0]){
          const cep = auth.address[0].cep
          const quantity = this.products.reduce( (next,product) => next + product.amount ,0)
          this.postOfficeService
            .freight(cep,quantity)
            .subscribe( freight => {
              this.freight_price = freight[0].price
              this.itens = this.installment()
            })
        }
      }
    )
  }

  tabChange(event: NgbTabChangeEvent){
    this.tab = event.nextId
  }

  next(){
    this.store.dispatch(new UpdateStages(true,StagesType.PAYMENT))
    this.router.navigate(['/finish','confirmation'])
  }

  control (name: string){
    return this.cardForm.get(name);
  }

  error(name: string, error: string): boolean {
    let control = this.control(name)
    return control.hasError(error) && (control.touched || control.dirty)
  }

  installment(): Installment[]{
    const valor = this.totalProduct + this.freight_price
    const installment: Installment[] = []
    for (let index = 1; index < 14; index++) {
      const price = {
        '1' : `A Vista - Até 10% de desconto - ${this.money( valor-(valor*0.10))}`,
        '2' : `${index}x Até 5% de desconto - ${this.money( (valor-(valor*0.05))/index )}`,
        '3' : `${index}x Até 5% de desconto - ${this.money( (valor-(valor*0.05))/index )}`,
        'default' : `${index}x sem juros - ${this.money(valor/index)}`
      }
      installment.push({ 
        text: (price[index.toString()] || price['default']),
        amount: index
      })
    }
    return installment
  }

  get billet(): Billet[]{
    return [
      {
        text: 'Total da sua compra:',
        value: this.totalProduct,
        color: 'grey lighten-2'
      },
      {
        text: 'Pagamento em boleto:',
        value: this.totalProduct - (this.totalProduct*0.15),
        color: 'color-default'
      },
      {
        text: 'Economia de:',
        value: this.totalProduct - (this.totalProduct - (this.totalProduct*0.15)),
        color: 'primary-color text-white'
      }
    ]
  }

  get totalProduct(): number{
    const total = this.products
    .reduce( (acount, product) => acount + (product.unitary_value * product.amount), 0)
    return total + this.freight_price
  }

  get form(): string{
    return this.tab
  }

  private money(value : any): string{
    return 'R$ '+ parseFloat(value).toFixed(2).replace('.',',')
  }

}
