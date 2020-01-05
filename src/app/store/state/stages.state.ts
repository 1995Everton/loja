import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UpdateStages } from '../actions/stages.action';
import { Stages, StagesType } from '../model/stages';
import { states } from 'src/app/pages/account/address-account/address-modal/address-modal.options';

export class StagesStateModel {
    stages: Stages;
}

@State<StagesStateModel>({
  name: 'stages',
  defaults: {
    stages: {
      confirmation: false,
      cart: false,
      address: true, // Todo: Criar pagina pra alterar endereçõs
      identification: false,
      payment: false,
      active: 'cart'
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
      if(!stages.cart){
        stages.active = StagesType.CART
      }else if(!stages.identification){
        stages.active = StagesType.IDENTIFICATION
      }else if(!stages.address){
        stages.active = StagesType.ADDRESS
      }else if(!stages.payment){
        stages.active = StagesType.PAYMENT
      }else if(!stages.confirmation){
        stages.active = StagesType.CONFIRMATION
      }
      setState({
          stages
      });
     
    }

}