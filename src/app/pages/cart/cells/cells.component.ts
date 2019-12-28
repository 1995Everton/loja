import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cells',
  templateUrl: './cells.component.html',
  styleUrls: ['./cells.component.scss']
})
export class CellsComponent implements OnInit {

  private sizes = ['32','34','36','38','40']
  private size = '32'
  private quantities = [1,2,3,4,5,6]
  private amount = 1

  constructor() { }

  ngOnInit() {
  }

}
