import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.css']
})
export class ItemHeaderComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}
}
