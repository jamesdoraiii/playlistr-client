import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '@services/playlist.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private playlist: PlaylistService) {}

  ngOnInit() {
    this.fetchPlaylist();
  }

  fetchPlaylist() {
    console.log('fetching playlists');
    this.route.paramMap.subscribe(params => {
      this.playlist.getPlaylistById(params.get('playlistId')).subscribe(result => {
        console.log(result);
      });
    });
  }
}
