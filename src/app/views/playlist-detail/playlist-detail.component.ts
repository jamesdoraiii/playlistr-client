import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PlaylistsService } from '@services/playlists.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private playlist: PlaylistsService) {}

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
