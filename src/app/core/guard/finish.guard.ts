import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StagesState } from 'src/app/store/state/stages.state';
import { Select } from '@ngxs/store';
import { Stages } from 'src/app/store/model/stages';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FinishGuard implements CanActivate {

  @Select(StagesState.getSelectedStages) stages: Observable<Stages>;

  constructor(
    private router: Router
  ){}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.stages.pipe( 
      map(stages => { // Meu coração doi com tantos if's
        const rota = []
        if(!stages.cart){
          rota.push('/home')
        }else if(!stages.identification){
          rota.push('/login')
        }else if(!stages.address){
          rota.push('/account','address')
        }else if(!stages.payment){
          rota.push('/finish','payment')
        }else if(!stages.confirmation){
          rota.push('/finish','confirmation')
        }
        if(rota.length > 0 && rota.join('/') != state.url){
          this.router.navigate(rota)
          return false
        }else{
          return true
        }
      })
    )
  }
  
}
