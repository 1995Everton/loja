import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { number, cpf_cnpf } from 'src/app/shared/validations/all.validator';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
  private itens: Installment[] = [];
  

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.itens = this.installment()
  }

  ngOnInit() {
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

  tabChange(event: NgbTabChangeEvent ){
    this.tab = event.nextId
  }

  next(){
    console.log(this.cardForm.getRawValue())
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
    const valor = 374.87
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
        value: 374.87,
        color: 'grey lighten-2'
      },
      {
        text: 'Pagamento em boleto:',
        value: 321.95,
        color: 'color-default'
      },
      {
        text: 'Economia de:',
        value: 52.92,
        color: 'primary-color text-white'
      }
    ]
  }

  get form(): string{
    return this.tab
  }

  private money(value : any): string{
    return 'R$ '+ parseFloat(value).toFixed(2).replace('.',',')
  }

}
