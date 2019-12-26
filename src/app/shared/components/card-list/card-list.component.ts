import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() miniature: string
  @Input() name: string
  @Input() unitary_value: string

  constructor() { }

  ngOnInit() {
  }

}
