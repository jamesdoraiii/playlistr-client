import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Playlist } from '@models/playlist';
import { PlaylistsService } from '@services/playlists.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  playlist: Playlist;

  constructor(private route: ActivatedRoute, private playlistsService: PlaylistsService) {}

  ngOnInit() {
    this.fetchPlaylist();
  }

  fetchPlaylist() {
    const playlistId = this.route.snapshot.paramMap.get('playlistId');

    this.route.paramMap.subscribe(params => {
      this.playlistsService.getPlaylistById(playlistId).subscribe((result: Playlist) => {
        console.log(result);
        this.formatTracks(result);
        this.playlist = result;
      });
    });
  }

  formatTracks(playlist: Playlist) {
    playlist.tracks = playlist.tracks.items.map(item => {
      return item.track;
    });
  }
}
