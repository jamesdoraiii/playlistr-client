import { Component, OnInit } from '@angular/core';

import { PlaylistsService } from '@services/playlists.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  playlists = [''];

  get userPlaylists(): any[] {
    return this.playlistsService.userPlaylists;
  }

  constructor(private playlistsService: PlaylistsService) {}

  ngOnInit() {}
}
