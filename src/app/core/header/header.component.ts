import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo: string = 'https://static.kabum.com.br/conteudo/temas/001/imagens/topo/logo_kabum_.png'

  constructor() { }

  ngOnInit() {
  }

}
