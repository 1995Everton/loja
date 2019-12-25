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
      text: 'Furniture', 
      items: [
        { text: 'Tables & Chairs' },
        { text: 'Sofas' },
        { text: 'Occasional Furniture' }
      ]
    },
    {
      text: 'Decor', 
      items: [
        { text: 'Bed Linen' },
        { text: 'Curtains & Blinds' },
        { text: 'Carpets' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
