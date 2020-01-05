import { Component, OnInit } from '@angular/core';
import { UserLocalService } from './shared/services/user-local.service';
import { Store } from '@ngxs/store';
import { UpdateStages } from './store/actions/stages.action';
import { StagesType } from './store/model/stages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private store : Store,
    private userLocalService: UserLocalService
  ){}

  ngOnInit(): void {
    this.userLocalService
      .isLoggedObservable()
      .subscribe(logged => {
        console.log(logged);
        
        this.store.dispatch(new UpdateStages(logged,StagesType.IDENTIFICATION))
      })
  }
  
}
