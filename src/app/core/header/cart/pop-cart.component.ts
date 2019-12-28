import { Component, OnInit } from '@angular/core';
import { LocalCartService } from 'src/app/shared/services/local-cart.service';
import { Product } from 'src/app/shared/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './pop-cart.component.html',
  styleUrls: ['./pop-cart.component.scss']
})
export class PopCartComponent implements OnInit {

  private _cart : Product[]

  constructor(
    private router: Router,
    private localCartService: LocalCartService
  ) { }

  ngOnInit() {
    this.localCartService
      .getItems()
      .subscribe(
        (success: Product[]) =>{
          this._cart = success
        },
        error => console.log(error)
      )
  }

  goToCart(): void{
    this.router.navigate(['/cart'])
  }

  get count(): number {
    return this._cart.length
  }

  get template(): string{
    if(this._cart.length > 0){
      return this.getTemplateCart()
    }else{
      return this.getTemplateEmpty()
    }
  }

  private getTemplateCart(): string{
    let cart = {}
    
    for (const product of this._cart) {
      let { id , unitary_value, name, miniature} = product
      if(!cart[id]) cart[id] = {}
      cart[id]['name'] = name
      cart[id]['unitary_value'] = unitary_value
      cart[id]['miniature'] = miniature
      cart[id]['amount'] = (cart[id]['amount'] || 0) + 1 
    }
    let sub_total = Object.values(cart)
      .reduce( (count: number,next: any) => 
        (parseFloat(next.unitary_value) * parseFloat( next.amount)) + count,0) as number

    return `
      <div class="row no-gutters">
        ${Object.values(cart).map( ({ name , amount , unitary_value,miniature}) => {
          return `
          <div class="col-12 row no-gutters itens-container align-items-center border-bottom border-light">
            <div class="col-3 image-content">
              <img src="${miniature}" class="img-fluid"/>
            </div>
            <div class="col-5 ml-auto details">
              <span class="name">${ name }</span>
              <span class="size">Quantidade: ${ amount }</span>
            </div>
            <div class="col-4 details text-right">
              <span class="size">R$ ${ this.money(unitary_value) }</span>
              <span class="price">3 x R$ ${  this.money((unitary_value/3)) }</span>
            </div>
          </div>
          `
        }).join("")}
        <div class="col-12 sub-total">
          <span class="title">Subtotal</span>
          <span class="total">R$ ${ this.money(sub_total) }</span>
        </div>
        <div class="col-12">
          <div class="button-container">
            <a class="learn-more">Ir ao Carrinho</a>
          </div>  
        </div>
      </div>
    `
  }

  private getTemplateEmpty(): string {
    return `
      <h3 class="cart-empty-title">
        Seu carrinho está vazio...
      </h3>
    `
  }

  private money(value : any): string{
    return parseFloat(value).toFixed(2).replace('.',',')
  }

}
