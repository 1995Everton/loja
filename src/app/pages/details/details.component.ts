import { Component, OnInit } from '@angular/core';
import { ProductImageService } from 'src/app/shared/services/product-image.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Paginate } from 'src/app/shared/models/paginate';
import { ProductImage } from 'src/app/shared/models/product-image';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  private loading: boolean = true
  private photos: ProductImage[] = []
  private product: Product

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productImageService: ProductImageService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params: Params) => {
      this.getProduct(parseInt(params.id)) 
      this.getProductImage(parseInt(params.id)) 
    });  
  }
  getProduct(id: number): void {
    this.productService
      .findById(id)
      .subscribe(
        success => this.product = success,
        error => {
          console.log(error)
          this.router.navigate(['/not-found'])
        }
      )
  }
  getProductImage(id: number): void {
    this.photos = []
    this.productImageService
      .allImageProduct(id)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        (success: Paginate) => this.photos = success.data,
        error => {
          console.log(error)
        }
      )
  }

}
