import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { LocalCartService } from 'src/app/shared/services/local-cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cells',
  templateUrl: './cells.component.html',
  styleUrls: ['./cells.component.scss']
})
export class CellsComponent implements OnInit {

  @Input() product: Product

  private sizes: Array<number> = []
  private quantities: Array<number> = []
  private size = 32
  private amount = 1
  
  constructor(
    private toastr: ToastrService,
    private localCartService: LocalCartService,
  ) { }

  ngOnInit() {
    this.amount = this.product.amount
    for (let index = 1; index < 20 ; index++) {
      this.quantities.push(index)
    }
    for (let index = 20; index < 50 ; index+=2) {
      this.sizes.push(index)
    }
  }

  onChange($event){
    this.localCartService.update(this.product.id,this.amount)
  }

  remove() {
    this.localCartService.remove(this.product.id)
    this.toastr.success('', 'Produto removido com sucesso');
  }

  private money(value : any): string{
    return parseFloat(value).toFixed(2).replace('.',',')
  }

}
