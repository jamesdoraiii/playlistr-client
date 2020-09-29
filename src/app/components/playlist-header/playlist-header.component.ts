import { Component, Input, OnInit } from '@angular/core';

import { Playlist } from '@models/playlist';

@Component({
  selector: 'app-playlist-header',
  templateUrl: './playlist-header.component.html',
  styleUrls: ['./playlist-header.component.css']
})
export class PlaylistHeaderComponent implements OnInit {
  @Input() playlist: Playlist;

  constructor() {}

  ngOnInit(): void {}
}
