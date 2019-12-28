import { Component, OnInit } from '@angular/core';
import { LocalCartService } from 'src/app/shared/services/local-cart.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private _cart : Product[]
  private _html = `
    <span>Hello World</span>
  `

  constructor(
    private localCartService: LocalCartService
  ) { }

  ngOnInit() {
    this.localCartService
      .getItems()
      .subscribe(
        (success: Product[]) =>{
          console.log(success)
          this._cart = success
        },
        error => console.log(error)
      )
  }

  private template(): string{
    
    let item =  `
        <div class="row no-gutters">
          ${[1,2].map( item => {
            return `
            <div class="col-12 row no-gutters itens-container align-items-center border-bottom border-light">
              <div class="col-3 image-content">
                <img src="https://static.dafiti.com.br/p/Ride-Skateboard-T%C3%AAnis-Ride-Skateboard-Mid-Tornado-Vinho-0347-0716981-1-cart.jpg" class="img-fluid"/>
              </div>
              <div class="col-5 ml-auto details">
                <span class="name">Ride Skateboard</span>
                <span class="size">Tamanho: 40</span>
              </div>
              <div class="col-4 details text-right">
                <span class="size">R$ 300,97</span>
                <span class="price">3 x R$ 100,97</span>
              </div>
            </div>
            `
          }).join("")}
          
          <div class="col-12">
            <span>Subtotal</span>
            <span>R$ 404,97</span>
          </div>
          <div class="col-12">
            <button 
              type="button" 
              color="warning" 
              >IR PARA A SACOLA</button>
          </div>
        </div>
    `
    console.log(item)
    return item
  }

}
