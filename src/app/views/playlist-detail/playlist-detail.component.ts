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
  spotifyPlaylistDetails: any;
  playlistrDetails: any;
  comments: any[];

  constructor(private route: ActivatedRoute, private playlistsService: PlaylistsService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fetchPlaylist();
    });
  }

  fetchPlaylist() {
    this.spotifyPlaylistDetails = undefined;
    const playlistId = this.route.snapshot.paramMap.get('playlistId');

    this.playlistsService.getSpotifyPlaylistInfoById(playlistId).subscribe((result: Playlist) => {
      this.spotifyPlaylistDetails = result;
    });

    this.playlistsService.getPlaylistrPlaylistInfoById(playlistId).subscribe((result: any) => {
      console.log('This is the result from the playlist detail graphql call', result);
      this.playlistrDetails = result.data.playlistBySpotifyPlaylistId;

      if (this.playlistrDetails) {
        this.comments = this.playlistrDetails.commentsByParentPlaylistId.nodes;
        this.formatVoteInformation();
      }
    });
  }

  formatVoteInformation() {
    this.spotifyPlaylistDetails.voteInfo = {
      userVote: this.playlistrDetails.userVote.nodes,
      voteCount: this.playlistrDetails.upVoteCount.totalCount - this.playlistrDetails.downVoteCount.totalCount
    };
  }
}
