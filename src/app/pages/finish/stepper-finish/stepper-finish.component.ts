import { Component, OnInit } from '@angular/core';
import { Stages } from 'src/app/store/model/stages';
import { Observable } from 'rxjs';
import { StagesState } from 'src/app/store/state/stages.state';
import { Select, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper-finish.component.html',
  styleUrls: ['./stepper-finish.component.scss']
})
export class StepperFinishComponent implements OnInit {

  private stages$: Observable<Stages>
  private active = 'cart'

  @Select(StagesState.getSelectedStages) stages: Observable<Stages>;

  constructor( ) { }

  ngOnInit() {
    this.stages$ = this.stages
  }

}
