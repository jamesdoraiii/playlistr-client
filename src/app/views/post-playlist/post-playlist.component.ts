import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-playlist',
  templateUrl: './post-playlist.component.html',
  styleUrls: ['./post-playlist.component.css']
})
export class PostPlaylistComponent implements OnInit {
  availableGenreTags = [
    'Acid House',
    'Chicago House',
    'Deep House',
    'Diva House',
    'Dutch House',
    'Electro House',
    'Freestyle House',
    'French House',
    'Funky House',
    'Ghetto House',
    'Hardbag',
    'Hip House',
    'Italo House',
    'Latin House',
    'Minimal House',
    'Progressive House',
    'Rave Music',
    'Swing House',
    'Tech House',
    'Tribal House',
    'UK Hard House',
    'US Garage',
    'Vocal House'
  ];

  tagsForPlaylist = ['Tech House', 'test'];

  constructor() {}

  ngOnInit(): void {}
}
