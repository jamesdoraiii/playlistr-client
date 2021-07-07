import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-playlist-preview',
  templateUrl: './post-playlist-preview.component.html',
  styleUrls: ['./post-playlist-preview.component.css']
})
export class PostPlaylistPreviewComponent implements OnInit {
  @Input() playlist: any;

  constructor() {}

  ngOnInit(): void {}
}
