import { Component, HostListener, OnInit } from '@angular/core';

import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UsersService } from '@services/users.service';

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

  constructor(public router: Router, private userService: UsersService) {}

  ngOnInit() {
    this.checkWidth();
    this.userService
      .createUser({
        username: 'test153351',
        password: 'dsahjkasdhjk',
        email: 'test6@gmail.com',
        spotify_user_id: 'jimmyd233'
      })
      .subscribe(result => console.log(result));
  }

  checkWidth() {
    if (window.innerWidth > 767) {
      this.isMenuOpen = true;
    }
  }
}
