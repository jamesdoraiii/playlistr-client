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

  ngOnInit(): void {
    if (this.item.type == 'album') {
      console.log(this.item);
    }
  }

  routeToItemDetail(item) {
    this.router.navigate(['/' + item.type + '/' + item.id]);
  }

  getDescription() {
    switch (this.item.type) {
      case 'artist':
        return 'Artist';
      case 'playlist':
        return this.item.owner.display_name;
    }
  }

  getBackgroundImageStyle() {
    if (this.item.images[0]) {
      return 'background-image: url("' + this.item.images[0].url + '");';
    }
  }
}
