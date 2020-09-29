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
    console.log('fetching playlists');
    this.route.paramMap.subscribe(params => {
      this.playlistsService.getPlaylistById(params.get('playlistId')).subscribe((result: Playlist) => {
        this.playlist = result;
      });
    });
  }
}
