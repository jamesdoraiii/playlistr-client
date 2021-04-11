import { BaseService } from '@services/base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  userPlaylists: any[];

  constructor(protected http: HttpClient, private base: BaseService) {
    this.base.$access_token_received.subscribe(result => {
      this.getPlaylistsForUser();
    });
  }

  getPlaylistById(id: string) {
    return this.http.post(environment.spotifyServerBaseUrl, { endpoint: `https://api.spotify.com/v1/playlists/${id}` });
  }

  getPlaylistsForUser() {
    this.base.requestWithToken(`https://api.spotify.com/v1/me/playlists`).subscribe(
      (playlists: any) => {
        this.userPlaylists = playlists.items;
      },
      err => {
        // if (err.status == 401) {
        //   this.base.refreshTokens();
        // }
      }
    );
  }
}
