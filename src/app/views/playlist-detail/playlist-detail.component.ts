import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Playlist } from '@models/playlist';
import { PlaylistsService } from '@services/playlists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  spotifyPlaylistDetails: any;
  playlistrDetails: any;
  comments: any[];

  constructor(private route: ActivatedRoute, private playlistsService: PlaylistsService, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fetchPlaylistDetails();
    });
  }

  fetchPlaylistDetails() {
    this.spotifyPlaylistDetails = undefined;
    const playlistId = this.route.snapshot.paramMap.get('playlistId');

    this.playlistsService.getSpotifyPlaylistInfoById(playlistId).subscribe(
      (result: Playlist) => {
        this.spotifyPlaylistDetails = result;
      },
      err => {
        alert(err.message);
        this.router.navigate(['/home']);
      }
    );

    this.playlistsService.getPlaylistrPlaylistInfoById(playlistId).subscribe((result: any) => {
      const playlist = result.data.playlistBySpotifyPlaylistId;
      if (playlist) {
        this.playlistrDetails = Object.assign({}, playlist);
        this.formatPlaylistrDetails();
      }
    });
  }

  formatPlaylistrDetails() {
    if (this.playlistrDetails) {
      this.comments = this.playlistrDetails.commentsByParentPlaylistId.nodes;
      this.playlistrDetails.likeInfo = {
        userLike: this.playlistrDetails.userLike.nodes,
        likeCount: this.playlistrDetails.likeCount.totalCount
      };
    }
  }
}
