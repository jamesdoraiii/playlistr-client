import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-row',
  templateUrl: './playlist-row.component.html',
  styleUrls: ['./playlist-row.component.css']
})
export class PlaylistRowComponent implements OnInit {
  @Input() title: string;
  @Input() playlists: any[];

  constructor() {}

  ngOnInit() {}
}
