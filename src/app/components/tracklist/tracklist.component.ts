import { Component, Input, OnInit } from '@angular/core';

import { WebPlayerService } from '@services/web-player.service';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {
  @Input() tracks: any;
  @Input() numberOfTracksToDisplay: number;
  @Input() showTrackArt: boolean;
  @Input() showTrackNumber: boolean;

  constructor(private webPlayerService: WebPlayerService) {}

  ngOnInit(): void {}

  playTrack(uri: string) {
    let filteredTracks = this.tracks.filter(track => track.uri !== uri);
    filteredTracks = filteredTracks.map(item => item.uri);
    filteredTracks.unshift(uri);
    this.webPlayerService.playTracks(filteredTracks);
  }
  convertmillisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds;
  }
}
