import { Component, HostListener, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BaseService } from '@services/base.service';
import { Router } from '@angular/router';
import { WebPlayerService } from '@services/web-player.service';

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

  constructor(
    public router: Router,
    private webPlayer: WebPlayerService,
    private base: BaseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.checkWidth();
    this.webPlayer.initializeSpotifyWebPlayer();

    //this is a test, remove this
    this.route.queryParams.subscribe(params => {
      console.log('in the query params', params);
      this.base.access_token = params['access_token'];
      this.base
        .requestWithToken('https://api.spotify.com/v1/me/playlists')
        .subscribe(response => console.log('response from req with token', response));
    });
  }

  checkWidth() {
    if (window.innerWidth > 767) {
      this.isMenuOpen = true;
    }
  }
}
