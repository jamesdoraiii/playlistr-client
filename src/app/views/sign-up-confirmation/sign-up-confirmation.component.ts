import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-sign-up-confirmation',
  templateUrl: './sign-up-confirmation.component.html',
  styleUrls: ['./sign-up-confirmation.component.css']
})
export class SignUpConfirmationComponent implements OnInit {
  profileCreatedSuccesfully = undefined;

  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit(): void {
    this.getTokensFromRouteParams();
  }

  getTokensFromRouteParams() {
    this.route.queryParams.subscribe(params => {
      const paramAccessToken = params['access_token'];
      const paramRefreshToken = params['refresh_token'];

      if (paramAccessToken && paramRefreshToken) {
        // alert('The spotify login worked you can now submit your user.');
        this.updateUserSpotifyID();
      } else {
        alert('there was an error signing you up, your information has not been saved please try again');
        this.profileCreatedSuccesfully = false;
      }
    });
  }

  updateUserSpotifyID() {
    this.auth.getUserProfileFromSpotify().subscribe(
      (res: any) => {
        this.auth.updateUserWithSpotifyUsername(res.id).subscribe(response => {
          this.profileCreatedSuccesfully = true;
        });
      },
      err => {
        alert('There was an error while trying to update your spotify user info.');
        this.profileCreatedSuccesfully = false;
      }
    );
  }
}
