import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-item-utility',
  templateUrl: './delete-item-utility.component.html',
  styleUrls: ['./delete-item-utility.component.css']
})
export class DeleteItemUtilityComponent implements OnInit {
  isModalOpen: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  deleteItem() {
    alert('item deleted!');
    this.router.navigate(['/home']);
  }
}
