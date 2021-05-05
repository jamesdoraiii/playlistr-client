import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-see-all-items',
  templateUrl: './see-all-items.component.html',
  styleUrls: ['./see-all-items.component.css']
})
export class SeeAllItemsComponent implements OnInit {
  items: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('allItems')) {
      this.router.navigate(['/home']);
    }
    window.scrollTo(0, 0);
    this.items = JSON.parse(localStorage.getItem('allItems'));
  }
}
