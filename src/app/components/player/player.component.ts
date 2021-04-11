import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { WebPlayerService } from '@services/web-player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  currentTrackInfo: any;

  constructor(private webPlayerService: WebPlayerService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.webPlayerService.playerStatusUpdated.subscribe(status => {
      if (status.track_window.current_track != this.currentTrackInfo) {
       
        this.currentTrackInfo = status.track_window.current_track;
        this.cdRef.detectChanges();
      }
    });
  }

  getVolume() {
    return this.webPlayerService.getVolume();
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
}
