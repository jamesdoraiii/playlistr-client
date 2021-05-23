import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.css']
})
export class ItemHeaderComponent {
  @Input() item: any;
  @Input() headerBackground: any;

  constructor() {}
}
