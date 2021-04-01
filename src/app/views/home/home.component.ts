import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Console } from 'console';
import { PlaylistsService } from '@services/playlists.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories = [];

  constructor(private playlistsService: PlaylistsService, private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit() {
    this.playlistsService.getPlaylistsForUser('jimmyd233').subscribe((response: any) => {
      this.categories.unshift({ title: 'Your Playlists', playlists: response.items });
      console.log(this.categories);
    });

    this.route.queryParams.subscribe(params => {});
  }
}
