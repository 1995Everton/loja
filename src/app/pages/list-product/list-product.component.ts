import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  page: any = 4
  pageSize: number = 10
  items = [1,2,3,4,5,6,7]
  public order_list: Array<string> = ['Mais Populares', 'Menor Preço', 'Maior Preço']
  public column_list: Array<string> = ['2 Colunas', '3 Colunas', '4 Colunas']
  public order: string = 'Mais Populares'
  public column: string = '4 Colunas'
  

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let { category, item } = this.activatedRoute.snapshot.params
  }

  get setColumns(){
    const column = + this.column.replace('Colunas','')
    return 'p-2 col-'+(12/column)
  }

}
