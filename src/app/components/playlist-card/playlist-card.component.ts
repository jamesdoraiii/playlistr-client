import { Component, Input, OnInit } from '@angular/core';

import { Playlist } from '@models/playlist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.css']
})
export class PlaylistCardComponent implements OnInit {
  @Input() playlist: Playlist;

  constructor(private router: Router) {}

  ngOnInit() {
  
  }
}
