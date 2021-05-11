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
  playerVolume: number = 100;

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
      }
      console.log(status);
      this.playerStatus = status;
      this.cdRef.detectChanges();
    });
  }

  getVolume() {
    // this may be unnecessary since the player always initiates at full volume but I will keep it around for now;
    this.playerVolume = this.webPlayerService.getVolume().then(response => {
      console.log('Volume Gotten!', response);
      this.playerVolume = response * 100;
      this.cdRef.detectChanges();
    });
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
    this.webPlayerService.seek(event.target.value);
  }

  changeVolume(event) {
    console.log(event.target.value / 100);
    this.webPlayerService.setVolume(event.target.value / 100);
  }

  convertmillisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds;
  }
}
