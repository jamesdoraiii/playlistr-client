import { Component, HostListener, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMenuOpen: boolean;
  title = 'playlistr';

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkWidth();
  }

  constructor(public router: Router) {}

  ngOnInit() {
    this.checkWidth();
  }

  checkWidth() {
    if (window.innerWidth > 767) {
      this.isMenuOpen = true;
    }
  }
}
