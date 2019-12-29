import { Component, OnInit } from '@angular/core';
import { PostOfficeService } from 'src/app/shared/services/post-office.service';
import { Freight } from 'src/app/shared/models/freight';
import { LocalCartService } from 'src/app/shared/services/local-cart.service';
import { Product } from 'src/app/shared/models/product';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private freight: Freight[]= []
  private products: Product[] = []
  private loading_freight: boolean = false
  private cep = ''

  private resume = [
    {
      text: 'Total dos Produtos:',
      value: 'R$ 159,90'
    },
    {
      text: 'Frete:',
      value: 'R$ 26,41'
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

  constructor(
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
      .freight(this.cep)
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

  private money(value : any): string{
    return parseFloat(value).toFixed(2).replace('.',',')
  }

  private isDisabled( value : any): boolean{
    return Array.isArray(value)
  }

}
