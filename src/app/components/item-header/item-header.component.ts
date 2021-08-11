import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.css']
})
export class ItemHeaderComponent implements OnChanges {
  @Input() item: any;
  @Input() headerBackground: any;
  @Input() padTop: boolean;
  @Input() playlistrDetails?: any;

  constructor() {}

  ngOnChanges() {
    console.log('in this on init of the item header', this.playlistrDetails);
  }
}
