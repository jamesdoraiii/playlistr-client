import { Component, HostListener, OnInit } from '@angular/core';

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

  constructor(public router: Router, private webPlayer: WebPlayerService) {}

  ngOnInit() {
    this.checkWidth();
    this.webPlayer.initializeSpotifyWebPlayer();
  }

  checkWidth() {
    if (window.innerWidth > 767) {
      this.isMenuOpen = true;
    }
  }
}
