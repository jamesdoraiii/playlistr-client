import { Component, OnInit } from '@angular/core';

import { PlaylistsService } from '@services/playlists.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories = [
    // { title: 'Top Of The Week', playlists: [{}, {}, {}, {}] },
    // { title: 'Tech House', playlists: [{}, {}, {}, {}] },
    // { title: 'Progressive', playlists: [{}, {}, {}, {}] },
    // { title: 'Old School', playlists: [{}, {}, {}, {}] }
  ];

  constructor(private playlistsService: PlaylistsService) {}

  ngOnInit() {
    this.playlistsService.getPlaylistsForUser('jimmyd233').subscribe((response): any => {
      this.categories.unshift({ title: 'Your Playlists', playlists: response.items });
      console.log(this.categories);
    });
  }
}
