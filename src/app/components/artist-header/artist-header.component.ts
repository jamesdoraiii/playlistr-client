import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-header',
  templateUrl: './artist-header.component.html',
  styleUrls: ['./artist-header.component.css']
})
export class ArtistHeaderComponent implements OnInit {
  @Input() artist: any;

  constructor() {}

  ngOnInit(): void {}
}
