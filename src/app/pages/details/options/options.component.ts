import { Component, OnInit, Input } from '@angular/core';
import { ProductSize } from 'src/app/shared/models/product_size';
import { Product } from 'src/app/shared/models/product';
import { LocalCartService } from 'src/app/shared/services/local-cart.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user.service';
import { finalize } from 'rxjs/operators';
import { ProductService } from 'src/app/shared/services/product.service';
import { UserLocalService } from 'src/app/shared/services/user-local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  private _sizes: ProductSize[] = []
  private _selectedSize: ProductSize
  private _product: Product;
  private _loading: boolean;
  @Input() loading: boolean = true
  @Input() set product(product: Product){
    this._product = product
  }

  constructor(
    private toastr: ToastrService,
    private localCartService: LocalCartService,
    private userService: UserService,
    private productService: ProductService,
    private userLocalService: UserLocalService,
    private router: Router
  ) { }

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
    return (this._product.unitary_value/3).toFixed(2).toString().replace('.',',')
  }

  addCart(): void{
    this.localCartService.add(this._product)
    this.toastr.success('', 'Produto adicionado ao carrinho');
  }

  get color(): string{
    if(!this.userLocalService.isLogged())  return ''
    let like = this._product.favorites.find( user => user.id = this.userLocalService.userId())
    return like ? 'red-text' : ''
  }

  private toggleFavorite(): void {
    if(!this.userLocalService.isLogged()){
      this.router.navigate(['/login'])
      return;
    }
    if(this._loading) return;
    this._loading = true
    this.userService
      .toggleFavorite(this._product.id)
      .pipe( finalize( () => this._loading = false) )
      .subscribe(
        (success: any) => {
          this.productService
            .findById(this._product.id)
            .subscribe(product => {
              this._product = product
              if(success.action){
                this.toastr.success('','Produto adicionado aos favoritos')
              }else{
                this.toastr.success('','Produto removido dos favoritos')
              }
            })
        },
        error => this.toastr.error('','Desculpe, tente mais tarde')
      )
  }

}
