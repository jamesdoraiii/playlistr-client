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
    private base: BaseService,
    private webPlayer: WebPlayerService,
    private route: ActivatedRoute
  ) {
    router.events.subscribe(val => {
      this.getAccessTokens();
    });
  }

  ngOnInit() {
    this.checkWidth();
  }

  checkWidth() {
    if (window.innerWidth > 767) {
      this.isMenuOpen = true;
    }
  }

  getAccessTokens() {
    this.route.queryParams.subscribe(params => {
      const paramToken = params['access_token'];
      let serviceToken = this.base.access_token;
      if (paramToken && paramToken != serviceToken) {
        this.base.access_token = paramToken;
        this.base.$access_token_received.next(paramToken);
      }
    });
  }
}
