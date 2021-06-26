import { Component, OnInit } from '@angular/core';

import { AuthService } from '@services/auth.service';
import { environment } from '@environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  showSignup: boolean = true;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  buttonAction() {
    if (this.showSignup) {
      //sign up
    }
    if (!this.showSignup) {
      //login
    }
    window.location.href = environment.spotifyServerBaseUrl + 'login';
  }
}
