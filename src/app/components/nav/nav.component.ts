import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  forward() {
    this.location.forward();
  }

  back() {
    this.location.back();
  }
}
