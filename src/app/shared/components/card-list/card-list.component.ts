import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { UserLocalService } from '../../services/user-local.service';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  private _product: Product;
  _loading: boolean;
  @Input() set product(product: Product){
    this._product = product
  }
  
  constructor(
    private productService: ProductService,
    private toastr : ToastrService,
    private userService: UserService,
    private userLocalService: UserLocalService,
    private router: Router
  ) { }

  ngOnInit() :void{

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

  get color(): string{
    if(!this.userLocalService.isLogged())  return ''
    let like = this._product.favorites.find( user => user.id = this.userLocalService.userId())
    return like ? 'red-text' : ''
  }

}
