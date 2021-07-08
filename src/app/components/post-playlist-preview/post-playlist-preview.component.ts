import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-playlist-preview',
  templateUrl: './post-playlist-preview.component.html',
  styleUrls: ['./post-playlist-preview.component.css']
})
export class PostPlaylistPreviewComponent implements OnInit {
  @Input() playlist: any;
  @Output() submit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
