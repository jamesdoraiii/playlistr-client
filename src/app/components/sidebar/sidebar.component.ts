import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { PlaylistsService } from '@services/playlists.service';
import { WebPlayerService } from '@services/web-player.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  nowPlayingImageUrl: string;

  get userPlaylists(): any[] {
    return this.playlistsService.userPlaylists;
  }

  constructor(
    private webPlayerService: WebPlayerService,
    private cdRef: ChangeDetectorRef,
    private playlistsService: PlaylistsService
  ) {}

  ngOnInit() {
    this.webPlayerService.playerStatusUpdated.subscribe(status => {
      if (status.track_window.current_track.album.images[0].url != this.nowPlayingImageUrl) {
        this.nowPlayingImageUrl = status.track_window.current_track.album.images[0].url;
        this.cdRef.detectChanges();
      }
    });
  }
}
