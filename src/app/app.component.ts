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

  fullScreenViews = ['/sign-up-confirmation', '/auth', '/welcome'];

  get currentRoute() {
    return this.router.url.split('?')[0];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkWidth();
  }

  constructor(public router: Router) {}

  ngOnInit() {
    this.checkWidth();
    // this.userService
    //   .createUser({ email: 'test@gmail.com', password: '1234', spotifyUserId: 'jimmyd233' })
    //   .subscribe(response => console.log('this is the response from create user', response));
  }

  checkWidth() {
    if (window.innerWidth > 767) {
      this.isMenuOpen = true;
    }
  }
}
