import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  constructor(private http: HttpClient) {}

  getPlaylistById(id: string) {
    return this.http.post(environment.spotifyServerBaseUrl, { endpoint: `https://api.spotify.com/v1/playlists/${id}` });
  }
}
