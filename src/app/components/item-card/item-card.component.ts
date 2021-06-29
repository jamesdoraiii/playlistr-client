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
    if (item.__typename) {
      this.router.navigate(['/playlist/' + item.spotifyPlaylistId]);
      return;
    }
    this.router.navigate(['/' + item.type + '/' + item.id]);
  }

  getDescription() {
    switch (this.item.type) {
      case 'artist':
        return 'Artist';
      case 'playlist':
        return this.item.ownerUsername;
    }
  }

  getItemImageSrc() {
    if (this.item.imageUrl) {
      return this.item.imageUrl;
    }
    if (this.item.images && this.item.images[0]) {
      return this.item.images[0].url;
    }
    return undefined;
  }
}
