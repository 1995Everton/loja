import { Component, OnInit, Input } from '@angular/core';
import { ProductImage } from 'src/app/shared/models/product-image';


@Component({
  selector: 'app-box-image',
  templateUrl: './box-image.component.html',
  styleUrls: ['./box-image.component.scss']
})
export class BoxImageComponent implements OnInit {

  private _photos: ProductImage[] = [];
  private _current: ProductImage

  @Input() loading: boolean
  @Input() set photos(photos: ProductImage[] ){
    if(photos.length > 0){
      this._photos = photos
      this._current = photos[0]
    }else{
      this._photos.push({
        url: "assets/NoImageFound.png"
      })
    }
    this._current = this._photos[0]
  }
  constructor(){}

  ngOnInit():void {
  
  }

  change(index: number){
    this._current = this._photos[index]
  }

}
