import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { finalize } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  page: any = 1
  pageSize: number = 0
  loading: boolean = false
  message : string = ''
  public order_list: Array<string> = ['Mais Populares', 'Menor Preço', 'Maior Preço']
  public column_list: Array<string> = ['2 Colunas', '3 Colunas', '4 Colunas']
  public order: string = 'Mais Populares'
  public column: string = '4 Colunas'
  private _products: Product[] = []
  private _sub_category: number

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params: Params) => {
      this._sub_category = parseInt(params.sub_category)
      this.getProduct() 
    });     
  }

  private getProduct(): void{
    this.message = ''
    this.loading = true
    this._products = []
    this.productService
      .paginated(this._sub_category,this.page)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        (success: any) => {
          this._products = success.data
          this.pageSize = success.total
        },
        error => {
          this.message = "Desculpe, esses produtos não estão disponivel no momento"
          console.log(error)
        }
      )
  }

  paginate(): void{
    this.getProduct()
  }

  get setColumns(): string{
    const column = + this.column.replace('Colunas','')
    return 'p-2 col-'+(12/column)
  }

  get products(){
    return this._products
  }

}
