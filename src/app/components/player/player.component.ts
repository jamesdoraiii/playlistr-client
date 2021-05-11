import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { WebPlayerService } from '@services/web-player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  currentTrackInfo: any;
  playerStatus: any;

  constructor(
    private webPlayerService: WebPlayerService,
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.webPlayerService.playerStatusUpdated.subscribe(status => {
      if (status.track_window.current_track != this.currentTrackInfo) {
        this.currentTrackInfo = status.track_window.current_track;
        this.cdRef.detectChanges();
      }
      this.playerStatus = status;
      console.log(status);
      this.cdRef.detectChanges();
    });
  }

  getVolume() {
    return this.webPlayerService.getVolume();
  }

  setVolume() {
    this.webPlayerService.setVolume(0.5);
  }

  pause() {
    console.log('pause clicked');
    this.webPlayerService.pause();
  }

  resume() {
    console.log('resume clicked');
    this.webPlayerService.resume();
  }

  previousTrack() {
    this.webPlayerService.previousTrack();
  }

  nextTrack() {
    this.webPlayerService.nextTrack();
  }

  navigateToArtist(artist: any) {
    console.log(artist);
    this.zone.run(() => {
      this.router.navigate(['artist/', artist.uri.split(':').slice(-1)[0]]);
    });
  }

  seekTo(event) {
    console.log(event);
  }

  changeVolume(event) {
    console.log(event.target.value / 100);
    this.webPlayerService.setVolume(event.target.value / 100);
  }
}
