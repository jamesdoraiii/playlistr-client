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
  playlistrDetails: any;
  comments: any[];
  userVoteDetails: any;
  playlistVoteCount: number;

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
      this.playlist = result;
    });

    this.playlistsService.getPlaylistrPlaylistInfoById(playlistId).subscribe((result: any) => {
      console.log('This is the result from the playlist detail graphql call', result);
      this.playlistrDetails = result.data.playlistBySpotifyPlaylistId;

      if (this.playlistrDetails) {
        this.comments = this.playlistrDetails.commentsByParentPlaylistId.nodes;
        this.userVoteDetails = this.playlistrDetails.userVote.nodes;
        this.playlistVoteCount =
          this.playlistrDetails.upVoteCount.totalCount - this.playlistrDetails.downVoteCount.totalCount;
      }
    });
  }
}
