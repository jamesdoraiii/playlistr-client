import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AuthService } from '@services/auth.service';
import { PlaylistsService } from '@services/playlists.service';
import { WebPlayerService } from '@services/web-player.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  nowPlayingImageUrl: string;
  @Output() closeMenu = new EventEmitter<any>();

  menuItems = [
    { route: '/home', title: 'Home', icon: 'fas fa-home' },
    { route: '/search', title: 'Search', icon: 'fas fa-search' },
    { route: '/post-playlist', title: 'Post a Playlist', icon: 'fas fa-plus-square' },
    { route: '/user/' + this.auth.userInfo.spotifyUserId, title: 'Your Profile', icon: 'fas fa-user' }
  ];

  get userPlaylists(): any[] {
    return this.playlistsService.userPlaylists;
  }

  constructor(
    private webPlayerService: WebPlayerService,
    private cdRef: ChangeDetectorRef,
    private playlistsService: PlaylistsService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.webPlayerService.playerStatusUpdated.subscribe(status => {
      if (status.track_window.current_track.album.images[0].url != this.nowPlayingImageUrl) {
        this.nowPlayingImageUrl = status.track_window.current_track.album.images[0].url;
        this.cdRef.detectChanges();
      }
    });
    console.log(this.auth.userInfo);
  }

  closeMenuOnMobileWidth() {
    if (window.innerWidth < 767) {
      alert('Closing menu');
      this.closeMenu.emit();
    }
  }
}
