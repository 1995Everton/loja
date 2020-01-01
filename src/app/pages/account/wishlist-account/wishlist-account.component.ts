import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Product } from 'src/app/shared/models/product';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist-account',
  templateUrl: './wishlist-account.component.html',
  styleUrls: ['./wishlist-account.component.scss']
})
export class WishlistAccountComponent implements OnInit {
  
  private _favorites: Product[] = []
  private _message: string;
  private _loading: boolean;

  constructor(
    private toastr: ToastrService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getFavorites()
  }

  remove(id: number){
    this.userService
      .toggleFavorite(id)
      .subscribe(
        success => {
          this.toastr.success('','Produto removido dos favoritos')
          this.getFavorites()
        },
        error => this.toastr.error('','Desculpe, tente mais tarde')
      )
  }

  getFavorites(){
    this._loading = true
    this.userService
      .getFavorites()
      .pipe( finalize( () => this._loading = false ))
      .subscribe(
        (success: any) => {this._favorites = success.data},
        error => {
          this._message = 'Você ainda não favoritou produtos'
        }
      )
  }

}
