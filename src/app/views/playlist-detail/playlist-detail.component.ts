import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Playlist } from '@models/playlist';
import { PlaylistsService } from '@services/playlists.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  playlist: Playlist;

  constructor(private route: ActivatedRoute, private playlistsService: PlaylistsService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fetchPlaylist();
    });
  }

  fetchPlaylist() {
    this.playlist = undefined;
    const playlistId = this.route.snapshot.paramMap.get('playlistId');

    this.playlistsService.getSpotifyPlaylistInfoById(playlistId).subscribe((result: Playlist) => {
      this.formatTracks(result);
      this.playlist = result;
    });

    this.playlistsService.getPlaylistrDetailsById(playlistId).subscribe((result: any) => {
      console.log('This is the result from the playlist detail graphql call', result);
    });
  }

  formatTracks(playlist: Playlist) {
    playlist.tracks = playlist.tracks.items.map(item => {
      return item.track;
    });
  }
}
