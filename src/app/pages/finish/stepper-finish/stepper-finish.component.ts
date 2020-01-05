import { Component, OnInit } from '@angular/core';
import { Stages } from 'src/app/store/model/stages';
import { Observable } from 'rxjs';
import { StagesState } from 'src/app/store/state/stages.state';
import { Select, Store } from '@ngxs/store';
import { UpdateStages } from 'src/app/store/actions/stages.action';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper-finish.component.html',
  styleUrls: ['./stepper-finish.component.scss']
})
export class StepperFinishComponent implements OnInit {

  private stages$: Observable<Stages>

  @Select(StagesState.getSelectedStages) stages: Observable<Stages>;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    // this.store.dispatch(new UpdateStages(false,'cart'))
    this.stages$ = this.stages
  }



}
