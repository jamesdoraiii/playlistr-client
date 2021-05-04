import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() item: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  routeToItemDetail(item) {
    this.router.navigate(['/' + item.type + '/' + item.id]);
  }
}
