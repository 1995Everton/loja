import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UpdateStages } from '../actions/stages.action';
import { Stages } from '../model/stages';

export class StagesStateModel {
    stages: Stages;
}

@State<StagesStateModel>({
  name: 'stages',
  defaults: {
    stages: {
      confirmation: false,
      cart: false,
      address: false,
      identification: false,
      payment: false
    }
  }
})
export class StagesState {

    constructor() {}

    @Selector()
    static getSelectedStages(state: StagesStateModel) {
        return state.stages;
    }

    @Action(UpdateStages)
    updateTodo({ getState, setState }: StateContext<StagesStateModel>, { completed, key }: UpdateStages) {
      const state = getState();
      const stages = state.stages
      stages[key] = completed;
      setState({
          stages
      });
     
    }

}