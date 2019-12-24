import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo: string = 'https://static.dafiti.com.br/images/kanui/logo-kanui.png'

  constructor() { }

  ngOnInit() {
  }

}
