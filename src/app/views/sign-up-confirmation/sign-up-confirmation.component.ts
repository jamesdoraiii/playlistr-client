import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-sign-up-confirmation',
  templateUrl: './sign-up-confirmation.component.html',
  styleUrls: ['./sign-up-confirmation.component.css']
})
export class SignUpConfirmationComponent implements OnInit {
  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit(): void {
    this.getTokensFromRouteParams();
  }

  getTokensFromRouteParams() {
    this.route.queryParams.subscribe(params => {
      const paramAccessToken = params['access_token'];
      const paramRefreshToken = params['refresh_token'];

      if (paramAccessToken && paramAccessToken) {
        alert('The spotify login worked you can now submit your user.');
        this.auth.getUserProfileFromSpotify().subscribe(response => {
          console.log('This is the repsonse from get user profile from spotify', response);
          //  here is where you will update user profile
          // in the subscribe of update user profile is where you know if the user is succesfully created.
        });
      } else {
        alert('there was an error signing you up, your information has not been saved please try again');
      }
    });
  }
}
