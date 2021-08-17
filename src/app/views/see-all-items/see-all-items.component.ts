import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SeeAllItemsService } from '@services/see-all-items.service';

@Component({
  selector: 'app-see-all-items',
  templateUrl: './see-all-items.component.html',
  styleUrls: ['./see-all-items.component.css']
})
export class SeeAllItemsComponent implements OnInit {
  get title(): string {
    return this.seeAllItemsService.title;
  }

  get items(): any[] {
    return this.seeAllItemsService.items;
  }

  constructor(private router: Router, private seeAllItemsService: SeeAllItemsService) {}

  ngOnInit(): void {
    if (!this.items) {
      this.router.navigate(['/home']);
    }
    const elmnt = document.getElementById('nav');
    if (elmnt) {
      elmnt.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
