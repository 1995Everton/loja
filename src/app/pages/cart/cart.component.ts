import { Component, OnInit } from '@angular/core';
import { PostOfficeService } from 'src/app/shared/services/post-office.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private postOfficeService: PostOfficeService
  ) { }

  ngOnInit() {
    // this.postOfficeService
    //   .freight("87047-230")
    //   .subscribe(
    //     success => console.log(success),
    //     error => console.log(error)
    //   )
  }

}
