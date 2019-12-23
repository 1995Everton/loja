import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-link',
  templateUrl: './circle-link.component.html',
  styleUrls: ['./circle-link.component.scss']
})
export class CircleLinkComponent  {

  @Input() title: string = ''
  @Input() href: string = ''
  @Input() rel: string = ''
  @Input() icon: string = 'fas fa-bug'
  @Input() color: string = '#007bff'
  @Input() size: string = '47px'
  @Input() fontSize: string = '14px'
}
