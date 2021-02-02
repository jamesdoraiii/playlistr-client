import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebPlayerService {
  constructor() {}

  initializeSpotifyWebPlayer() {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const token =
        'BQDalBRlW1S02b3C1g-Un5yH3OuCkf7L__XB4ZO2LTq9siSQZdXPN7V6SbP0vEwu8BRvJcXtfe7SfTOGI6h6aKrNV_JpihikXxbfZa-Zc9NTP41u5vz61PwnL-ubzOcLSIDs5swTyXjW4wPDHKd_sutRxAnnuWFM3A';
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
