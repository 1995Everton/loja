import { Component, OnInit, Input } from '@angular/core';
import { ProductSize } from 'src/app/shared/models/product_size';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  private _sizes: ProductSize[] = []
  private _selectedSize: ProductSize

  @Input() product : Product
  @Input() loading: boolean = true

  constructor() { }

  ngOnInit() {
    this._sizes.push(
      {
        id: 1,
        name: "34"
      },
      {
        id: 2,
        name: "36"
      }
    )
    this._selectedSize = this._sizes[1]
  }
  
  calc(): string{
    console.log(Math.round(this.product.unitary_value/3));
    
    return (this.product.unitary_value/3).toFixed(2).toString().replace('.',',')
  }

}
