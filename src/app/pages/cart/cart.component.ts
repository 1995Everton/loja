import { Component, OnInit } from '@angular/core';
import { PostOfficeService } from 'src/app/shared/services/post-office.service';
import { Freight } from 'src/app/shared/models/freight';
import { LocalCartService } from 'src/app/shared/services/local-cart.service';
import { Product } from 'src/app/shared/models/product';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

interface Resume {
  text: string
  value: string
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  
  private products: Product[] = []
  private freight: Freight[]= []
  private loading_freight: boolean = false
  private value_freight: string
  private cep = ''
  

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private localCartService: LocalCartService,
    private postOfficeService: PostOfficeService
  ) { }

  ngOnInit() {
    this.localCartService
      .getItems()
      .subscribe( 
        success => this.products = this.localCartService.totalize(success),
        error => console.log()
      )
  }

  searchFreight() {
    this.loading_freight = true
    this.postOfficeService
      .freight(this.cep,this.products.reduce( (acount,product) => acount + product.amount ,0))
      .pipe(finalize( () => this.loading_freight = false))
      .subscribe(
        success => {
          this.freight = success.sort( (a,b) => {
            if(a.price > b.price) return 1
            if(a.price < b.price) return -1
            return 0
          })
        },
        error => console.log(error)
      )
  }
  finish(): void{
    // if(!this.priceFreight){
    //   this.toastr.info('','Escolha uma modalidade de frete')
    //   return;
    // }
    this.router.navigate(['/finish','payment'])
    console.log('Emitir Evento')
  }

  get resume(): Resume[]{
    return [
      {
        text: 'Total dos Produtos:',
        value: this.money(this.totalProduct)
      },
      {
        text: 'Frete:',
        value: this.money(this.priceFreight)
      },
      {
        text: 'Crédito:',
        value: '-R$ 0,00'
      },
      {
        text: 'Serviços:',
        value: 'R$ 0,00'
      }
    ]
  }

  get totalProduct(): number{
    return this.products
      .reduce( (acount, product) => acount + (product.unitary_value * product.amount), 0)
  }

  get priceFreight(): number{
    let freight = 0
    if(this.value_freight){
      freight = this.freight.find( item => item.code == this.value_freight).price
    }
    return freight
  }

  private money(value : any): string{
    return 'R$ '+parseFloat(value).toFixed(2).replace('.',',')
  }

  private isDisabled( value : any): boolean{
    return Array.isArray(value)
  }

}
