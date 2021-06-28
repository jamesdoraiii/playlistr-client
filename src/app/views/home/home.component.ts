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

  get userPlaylists(): any[] {
    return this.playlistsService.userPlaylists;
  }

  constructor(private playlistsService: PlaylistsService) {}

  ngOnInit() {
    this.getAllPlaylists();
  }

  getAllPlaylists() {
    this.playlistsService.getAllPlaylists().subscribe((response: any) => {
      console.log('this is the response from get all playlists', response.data);
      this.allPlaylistsFromYourServer = response.data.allPlaylists.nodes;
    });
  }
}
