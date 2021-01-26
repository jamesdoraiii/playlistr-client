import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {
  @Input() tracks: any;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.tracks);
  }
}
