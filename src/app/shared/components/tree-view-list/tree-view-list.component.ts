import { Component, OnInit } from '@angular/core';
import { SelectableSettings } from '@progress/kendo-angular-treeview';

interface TreeView {
  text: string
  items?: TreeView[]
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view-list.component.html',
  styleUrls: ['./tree-view-list.component.scss']
})
export class TreeViewListComponent implements OnInit {

  public selection: SelectableSettings = { mode: 'multiple' };

  public expandedKeys: any[] = [];
  public selectedKeys: any[] = [];

  public data: TreeView[] = [
    {
      text: 'GÊNERO', 
      items: [
        { text: 'Feminino' }
      ]
    },
    {
      text: 'CATEGORIA', 
      items: [
        { text: 'Casual' },
        { text: 'Tenis de Corrida' },
        { text: 'Skate' },
        { text: 'Surf' },
        { text: 'Aventura' }
      ]
    },
    {
      text: 'TÊNIS', 
      items: [
        { text: 'Casual' },
        { text: 'Tenis de Corrida' },
        { text: 'Skate' },
        { text: 'Surf' },
        { text: 'Aventura' }
      ]
    },
    {
      text: 'TAMANHO', 
      items: [
        { text: 'P' },
        { text: 'M' },
        { text: 'G' },
        { text: 'GG' },
        { text: '14' },
        { text: '16' },
        { text: '17' },
        { text: '18' },
        { text: '20' },
        { text: '38' },
        { text: '40' },
        { text: '42' },
        { text: '44' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
