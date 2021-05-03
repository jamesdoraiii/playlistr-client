import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.css']
})
export class ItemRowComponent implements OnInit {
  @Input() title: string;
  @Input() items: any[];

  constructor() {}

  ngOnInit(): void {}
}
