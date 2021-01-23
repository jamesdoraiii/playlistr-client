import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  constructor(private http: HttpClient) {}

  getArtistById(id: string) {
    return this.http.post(environment.spotifyServerBaseUrl, { endpoint: `https://api.spotify.com/v1/artists/${id}` });
  }

  getArtistTopTracksById(id: string) {
    return this.http.post(environment.spotifyServerBaseUrl, {
      endpoint: `https://api.spotify.com/v1/artists/${id}/top-tracks`
    });
  }

  getArtistAlbumsById(id: string) {
    return this.http.post(environment.spotifyServerBaseUrl, {
      endpoint: `https://api.spotify.com/v1/artists/${id}/albums`
    });
  }
  getArtistRelatedArtistsById(id: string) {
    return this.http.post(environment.spotifyServerBaseUrl, {
      endpoint: `https://api.spotify.com/v1/artists/${id}/related-artists`
    });
  }
}
