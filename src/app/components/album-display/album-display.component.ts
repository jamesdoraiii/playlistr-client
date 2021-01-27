import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-display',
  templateUrl: './album-display.component.html',
  styleUrls: ['./album-display.component.css']
})
export class AlbumDisplayComponent implements OnInit {
  @Input() album: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.album);
  }
}
