///  <reference types="@types/spotify-web-playback-sdk"/>

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebPlayerService {
  player: any;
  playerStatusUpdated = new Subject<any>();
  deviceId: string;
  token =
    'BQCx_mYRqRKlnRWXrCY8Z-TivcvC3FA1hf_DnuA-mmuZwDZRrNeP2Ale9FNDFW7zvRnIBISL6ptmHKvbhrUHxuPh0-MmzAzteXwtT-mCIUuVMbGxYxoS5YkEkG1vx9FogMHt1u4GNUFF5v2NPD7eIaE4QPz7DWugrg';
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
      this.player.addListener('player_state_changed', state => {
        this.playerStatusUpdated.next(state);
      });

      // Ready
      this.player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      // Not Ready
      this.player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      this.player.setName('Playlistr Web Player').then(() => {
        console.log('Player name updated!');
      });

      // Connect to the this.player!
      this.player.connect();
    };
  }

  playRequest = ({
    spotify_uris,
    playerInstance: {
      _options: { getOAuthToken, id }
    }
  }) => {
    getOAuthToken(access_token => {
      fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
        method: 'PUT',
        body: JSON.stringify({ uris: spotify_uris }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`
        }
      });
    });
  };

  playTracks(trackUris: string[]) {
    this.playRequest({
      spotify_uris: trackUris,
      playerInstance: this.player
    });
  }

  // getCurrentState() {
  //   this.player.getCurrentState().then(state => {
  //     if (!state) {
  //       console.error('User is not playing music through the Web Playback SDK');
  //       return;
  //     }

  //     let {
  //       current_track,
  //       next_tracks: [next_track]
  //     } = state.track_window;

  //   });
  // }

  getVolume() {
    return this.player.getVolume();
  }

  setVolume(volumeLevel: number) {
    this.player.setVolume(volumeLevel).then(() => {
      console.log('Volume updated!');
    });
  }

  pause() {
    this.player.pause().then(() => {
      console.log('Paused!');
    });
  }

  resume() {
    this.player.resume().then(() => {
      console.log('Resumed!');
    });
  }

  seek() {
    this.player.seek(60 * 1000).then(() => {
      console.log('Changed position!');
    });
  }

  previousTrack() {
    this.player.previousTrack().then(() => {
      console.log('Set to previous track!');
    });
  }

  nextTrack() {
    this.player.nextTrack().then(() => {
      console.log('Skipped to next track!');
    });
  }
}
