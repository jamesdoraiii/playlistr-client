import { Component, OnInit } from '@angular/core';

import { PlaylistsService } from '@services/playlists.service';

@Component({
  selector: 'app-post-playlist',
  templateUrl: './post-playlist.component.html',
  styleUrls: ['./post-playlist.component.css']
})
export class PostPlaylistComponent implements OnInit {
  availableGenreTags = [
    { id: 1, name: 'Acid House' },
    { id: 2, name: 'Chicago House' },
    { id: 3, name: 'Deep House' },
    { id: 4, name: 'Diva House' },
    { id: 5, name: 'Dutch House' },
    { id: 6, name: 'Electro House' },
    { id: 7, name: 'Freestyle House' },
    { id: 8, name: 'French House' },
    { id: 9, name: 'Funky House' },
    { id: 10, name: 'Ghetto House' },
    { id: 11, name: 'Hardbag' },
    { id: 12, name: 'Hip House' },
    { id: 13, name: 'Italo House' },
    { id: 14, name: 'Latin House' },
    { id: 15, name: 'Minimal House' },
    { id: 16, name: 'Progressive House' },
    { id: 17, name: 'Rave Music' },
    { id: 18, name: 'Swing House' },
    { id: 19, name: 'Tech House' },
    { id: 20, name: 'Tribal House' },
    { id: 21, name: 'UK Hard House' },
    { id: 22, name: 'US Garage' },
    { id: 23, name: 'Vocal House' }
  ];

  playlistUrl: string;

  tagsForPlaylist = ['Tech House', 'test'];

  constructor(private playlistService: PlaylistsService) {}

  ngOnInit(): void {}

  removeTag(tagForRemoval: any) {
    this.tagsForPlaylist = this.tagsForPlaylist.filter(tag => tag != tagForRemoval)
  }

  submit() {
    var playlistId = this.playlistUrl.substring(
      this.playlistUrl.lastIndexOf('/') + 1,
      this.playlistUrl.lastIndexOf('?')
    );
    console.log('preparing to submit playlist', playlistId);

    this.playlistService.postPlaylist(playlistId, this.tagsForPlaylist).subscribe(response => {
      console.log('This is the response from post playlist', response);
    });
  }
}
