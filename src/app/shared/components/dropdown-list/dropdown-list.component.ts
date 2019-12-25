import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {

  _select: string = ''
  protected debource: Subject<string> = new Subject<string>()
  @Input() set value (value: string){
    this._select = value
  }
  @Input() itens: Array<string> = []
  @Output() eventEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.debource
       .subscribe(filter => this.eventEmitter.emit(filter)) // Emite o evento para o componente pai
  }

  ngOnDestroy(): void {
    this.debource.unsubscribe()
}

}
