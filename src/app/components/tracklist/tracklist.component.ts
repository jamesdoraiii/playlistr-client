import { Component, Input, OnInit } from '@angular/core';

import { WebPlayerService } from '@services/web-player.service';
@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {
  @Input() tracks: any;

  constructor(private webPlayerService: WebPlayerService) {}

  ngOnInit(): void {
    console.log(this.tracks);
  }

  playTrack(uri: string) {
    this.webPlayerService.playTrack(uri);
  }
}
