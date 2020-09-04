import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkWidth();
  }
  title = 'angular-tailwind-starter';
  isMenuOpen: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkWidth();
  }

  checkWidth() {
    if (window.innerWidth > 767) {
      this.isMenuOpen = true;
    }
  }
}
