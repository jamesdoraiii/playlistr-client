import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories = [
    { title: 'Top Of The Week', playlists: [{}, {}, {}, {}] },
    { title: 'Tech House', playlists: [{}, {}, {}, {}] },
    { title: 'Progressive', playlists: [{}, {}, {}, {}] },
    { title: 'Old School', playlists: [{}, {}, {}, {}] }
  ];

  constructor() {}

  ngOnInit() {}
}
