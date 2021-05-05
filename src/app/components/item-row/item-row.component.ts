import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.css']
})
export class ItemRowComponent implements OnInit {
  @Input() title: string;
  @Input() items: any[];
  @Input() showAllItems: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  seeAll() {
    localStorage.setItem('allItems', JSON.stringify(this.items));
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
