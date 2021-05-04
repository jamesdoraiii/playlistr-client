import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.css']
})
export class ItemRowComponent implements OnInit {
  @Input() title: string;
  @Input() items: any[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  seeAll() {
    localStorage.setItem('allItems', JSON.stringify(this.items));
    this.router.navigate(['/see-all-items']);
  }
}
