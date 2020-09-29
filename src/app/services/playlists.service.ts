import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  constructor(private http: HttpClient) {}

  getPlaylistById(id: string) {
    return this.http.post(environment.spotifyServerBaseUrl, { endpoint: `https://api.spotify.com/v1/playlists/${id}` });
  }

  getPlaylistsForUser(spotifyUserId: string) {
    return this.http.post(environment.spotifyServerBaseUrl, {
      endpoint: `https://api.spotify.com/v1/users/${spotifyUserId}/playlists`
    });
  }
}
