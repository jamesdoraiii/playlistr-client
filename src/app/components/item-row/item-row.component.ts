import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SeeAllItemsService } from '@services/see-all-items.service';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.css']
})
export class ItemRowComponent implements OnInit {
  @Input() title: string;
  @Input() items: any[];
  @Input() showAllItems: boolean;

  constructor(private router: Router, private seeAllItemsService: SeeAllItemsService) {}

  ngOnInit(): void {}

  seeAll() {
    this.seeAllItemsService.setItems(this.items);
    this.seeAllItemsService.setTitle('All ' + this.title);
    this.router.navigate(['/see-all-items']);
  }

  getListLength() {
    if (this.showAllItems) {
      return 100;
    }
    if (window.innerWidth <= 1280) {
      return 3;
    } else {
      return 5;
    }
  }
}
