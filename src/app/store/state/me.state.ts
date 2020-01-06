import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetMe, SetMe } from '../actions/me.action';
import { Me } from '../model/me';
import { tap } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';

export class MeStateModel {
    auth: Me;
}

@State<MeStateModel>({
  name: 'me',
  defaults: {
    auth: { }
  }
})
export class MeState {

    constructor(
      private userService: UserService
    ) {}

    @Selector()
    static getMeList(state: MeStateModel) {
      return state.auth;
    }

    @Action(GetMe)
    getMe({ patchState }: StateContext<MeStateModel>) {
      return this.userService
        .setMe()
        .pipe(
          tap((auth) => {
            patchState({
                auth
            });
          })
        );
    }

    @Action(SetMe)
    updateTodo({ patchState }: StateContext<MeStateModel>) {
      return this.userService
        .setMe()
        .pipe(
          tap((auth) => {
            patchState({
                auth
            });
          })
        );
     
    }

}