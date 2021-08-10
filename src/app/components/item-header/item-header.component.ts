import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.css']
})
export class ItemHeaderComponent implements OnInit {
  @Input() item: any;
  @Input() headerBackground: any;
  @Input() padTop: boolean;

  constructor() {}

  ngOnInit() {
    console.log('in this on init of the item header', this.item);
  }
}
