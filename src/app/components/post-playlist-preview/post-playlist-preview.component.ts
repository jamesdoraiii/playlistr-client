import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { environment } from '@environment';

@Component({
  selector: 'app-post-playlist-preview',
  templateUrl: './post-playlist-preview.component.html',
  styleUrls: ['./post-playlist-preview.component.css']
})
export class PostPlaylistPreviewComponent implements OnInit {
  @Input() playlist: any;
  @Output() submit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  get environment() {
    return environment;
  }

  constructor() {}

  ngOnInit(): void {}

  isPlaylistLengthValid() {
    if (this.playlist.tracks.length > environment.maxPlaylistLength) {
      return false;
    }
    return true;
  }

  submitClicked() {
    if (this.isPlaylistLengthValid()) {
      alert('Playlist length is too great. Please adjust tracks and try again.');
      return;
    }
    this.submit.emit();
  }
}
