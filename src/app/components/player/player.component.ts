import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { WebPlayerService } from '@services/web-player.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  currentTrackInfo: any;
  playerStatus: any;
  playerVolume: number = 100;
  isOpen: boolean;

  constructor(
    private webPlayerService: WebPlayerService,
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.webPlayerService.playerStatusUpdated.subscribe(status => {
      if (status && status.track_window.current_track != this.currentTrackInfo) {
        this.currentTrackInfo = status.track_window.current_track;
      }
      this.playerStatus = status;
      this.cdRef.detectChanges();
    });
    interval(500).subscribe(tick => {
      // may need to unsubscribe from this to prevent memory leak? Keep an eye on it
      if (this.playerStatus && !this.playerStatus.paused) {
        this.playerStatus.position += 500;
      }
    });
  }

  getVolume() {
    // this may be unnecessary since the player always initiates at full volume but I will keep it around for now;
    this.playerVolume = this.webPlayerService.getVolume().then(response => {
      this.playerVolume = response * 100;
      this.cdRef.detectChanges();
    });
  }

  setVolume() {
    this.webPlayerService.setVolume(0.5);
  }

  pause() {
    this.webPlayerService.pause();
  }

  resume() {
    this.webPlayerService.resume();
  }

  previousTrack() {
    this.webPlayerService.previousTrack();
  }

  nextTrack() {
    this.webPlayerService.nextTrack();
  }

  navigateToArtist(artist: any) {
    this.zone.run(() => {
      this.router.navigate(['artist/', artist.uri.split(':').slice(-1)[0]]);
    });
  }

  seekTo(event) {
    this.webPlayerService.seek(event.target.value);
  }

  changeVolume(event) {
    this.webPlayerService.setVolume(event.target.value / 100);
  }

  shuffle() {
    this.webPlayerService.shuffle();
  }

  convertmillisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds;
  }
}
