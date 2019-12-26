import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/shared/services/store.service';
import { Store } from 'src/app/shared/models/store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private store: Store

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit() {
    this.storeService
      .getStore()
      .subscribe(
        (success: any) => this.store = success.data[0],
        error => console.log(error)
      )
  }

  get address (){
    if(!this.store) return []
    let { street, number, email, telephone, city, state, cep } = this.store
    return [
      {
        icon: 'home',
        text: `${street}, ${number}`
      },
      {
        icon: 'building',
        text: `${city}, ${state}, ${cep}`
      },
      {
        icon: 'envelope',
        text: email
      },
      {
        icon: 'phone-alt',
        text: telephone
      }
    ]
  }

  get social(){
    if(!this.store) return []
    let { facebook, twitter, instagram, google_play  } = this.store
    return [
      {
        icon: 'fab fa-facebook-f',
        color: '#007bff',
        href: facebook
      },
      {
        icon: 'fab fa-twitter',
        color: '#55acee',
        href: twitter
      },
      
      {
        icon: 'fab fa-instagram',
        color: '#ef0707',
        href: instagram
      },
      {
        icon: 'fab fa-google-play',
        color: '#689f38',
        href: google_play
      }
    ]
  }

}
