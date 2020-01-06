import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { MeState } from 'src/app/store/state/me.state';
import { Observable } from 'rxjs';
import { Me } from 'src/app/store/model/me';
import { Product } from 'src/app/shared/models/product';
import { LocalCartService } from 'src/app/shared/services/local-cart.service';
import { map } from 'rxjs/operators';
import { RequestService } from 'src/app/shared/services/request.service';
import { Request } from 'src/app/shared/models/request';
import { PostOfficeService } from 'src/app/shared/services/post-office.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-finish',
  templateUrl: './confirmation-finish.component.html',
  styleUrls: ['./confirmation-finish.component.scss']
})
export class ConfirmationFinishComponent implements OnInit {

  private products : Product[] = []
  private auth: Me
  private freight_price = 0
  @Select(MeState.getMeList) auth$: Observable<Me>

  constructor(
    private localCartService : LocalCartService,
    private requestService: RequestService,
    private postOfficeService: PostOfficeService,
    private toestr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.localCartService
      .getItems()
      .pipe(map( products => this.localCartService.totalize(products)))
      .subscribe(
        products => this.products = products
      )
    this.auth$.subscribe(auth => {
      this.auth = auth
      if(auth.address && auth.address[0]){
        const cep = auth.address[0].cep
        const quantity = this.products.reduce( (next,product) => next + product.amount ,0)
        this.postOfficeService
          .freight(cep,quantity)
          .subscribe( freight => {
            this.freight_price = freight[0].price
          })
      }
      
    })
  }

  private money(value : any): string{
    return 'R$ '+ parseFloat(value).toFixed(2).replace('.',',')
  }

  get totalProduct(): number{
    return this.products
    .reduce( (acount, product) => acount + (product.unitary_value * product.amount), 0)
  }

  finish(){
    let products = []
    for (const product of this.products) {
      products.push({ 
        id : product.id
      })
    }
    const request: Request = {
      address_id: this.auth.address[0].id,
      price_total: this.freight_price,
      status: true,
      amount: products.length,
      products

    }
    this.requestService
      .create(request)
      .subscribe(
        success => {
          console.log(success)
          this.localCartService.clean()
          this.toestr.success('Pedido Realizado com sucesso')
          this.router.navigate(['/account','requests'])
        },
        error => {
          console.log(error)
          this.toestr.success('Não foi possivel realizar o pedido')
        }
      )
    
    
  }

}
