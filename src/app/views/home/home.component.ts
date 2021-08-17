import { Component, OnInit } from '@angular/core';

import { PlaylistsService } from '@services/playlists.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  playlists = [''];
  allPlaylistsFromYourServer = [];
  homePageGenres = ['Deep House', 'Tech House', 'Progressive House'];
  playlistsByGenre = {};
  topVotedPlaylists: any;

  get userPlaylists(): any[] {
    return this.playlistsService.userPlaylists;
  }

  constructor(private playlistsService: PlaylistsService) {}

  ngOnInit() {
    // this.getAllPlaylists();
    this.getPlaylistsForGenreTags();
    this.getTopVotedPlaylists();
  }

  getAllPlaylists() {
    this.playlistsService.getAllPlaylists().subscribe((response: any) => {
      this.allPlaylistsFromYourServer = response.data.allPlaylists.nodes;
    });
  }

  getPlaylistsForGenreTags() {
    for (let tag of this.homePageGenres) {
      this.playlistsService.getPlaylistsByGenre(tag).subscribe((res: any) => {
        console.log('in the res for ', tag, res);
        if (res.data) {
          this.playlistsByGenre[tag] = res.data.playlistsByGenre.nodes;
        }
      });
    }
  }

  getTopVotedPlaylists() {
    this.playlistsService.getTopVotedPlaylists().subscribe((res: any) => {
      if (res.data) {
        console.log(res);
        this.topVotedPlaylists = res.data.topVotedPlaylists.nodes;
      }
    });
  }
}
