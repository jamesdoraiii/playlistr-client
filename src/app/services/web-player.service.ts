///  <reference types="@types/spotify-web-playback-sdk"/>
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebPlayerService {
  get window(): any {
    return window;
  }

  constructor() {}

  initializeSpotifyWebPlayer() {
    this.window.onSpotifyWebPlaybackSDKReady = () => {
      const token =
        'BQBRo3mxbYvPQ7Z6vTJfIOGhIQo7z_zZBLlXF1g_mHuqQK9xTlSDflXrAmrTWoGFpr4t2NRX5Z4Jn3FmBQGywE2N7nitXW6KDCaD0yB2CjERkCWhSVG-vdmEdkdf8iCw_Fvpg2KqZ61kzW27b6i_w1ctWy2t_xq_eQ';

      const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => {
          cb(token);
        }
      });

      // Error handling
      player.addListener('initialization_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('authentication_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('account_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('playback_error', ({ message }) => {
        console.error(message);
      });

      // Playback status updates
      player.addListener('player_state_changed', state => {
        console.log(state);
      });

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      // Connect to the player!
      player.connect();
    };
  }
}
