///  <reference types="@types/spotify-web-playback-sdk"/>
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebPlayerService {
  player: any;
  token =
    'BQDWjxgWuBRXbkRmM2pS-_xdPpGlGRuD9EUFnaMLhS4VjEtuIybY98qmCXXrkr6J0KYd_mgLIRrB1PtTzPF5CKtbhRrKQIEkc0sMMUw5z5xm934_MuDKlAj48SDHcQkqJsCRNZ-HPVw3xRYjIPw9OhFV2TmbHtEmEw';
  get window(): any {
    return window;
  }

  constructor() {}

  initializeSpotifyWebPlayer() {
    this.window.onSpotifyWebPlaybackSDKReady = () => {
      this.player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => {
          cb(this.token);
        }
      });

      // Error handling
      this.player.addListener('initialization_error', ({ message }) => {
        console.error(message);
      });
      this.player.addListener('authentication_error', ({ message }) => {
        console.error(message);
      });
      this.player.addListener('account_error', ({ message }) => {
        console.error(message);
      });
      this.player.addListener('playback_error', ({ message }) => {
        console.error(message);
      });

      // Playback status updates
      this.player.addListener('this.player_state_changed', state => {
        console.log(state);
      });

      // Ready
      this.player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      // Not Ready
      this.player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      // Connect to the this.player!
      this.player.connect();
    };
  }

  playRequest = ({
    spotify_uri,
    playerInstance: {
      _options: { getOAuthToken, id }
    }
  }) => {
    getOAuthToken(access_token => {
      fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
        method: 'PUT',
        body: JSON.stringify({ uris: [spotify_uri] }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`
        }
      });
    });
  };

  playTrack(trackUri: string) {
    this.playRequest({
      spotify_uri: trackUri,
      playerInstance: this.player
    });
  }
}
