import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { PlaylistsService } from '@services/playlists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-playlist',
  templateUrl: './post-playlist.component.html',
  styleUrls: ['./post-playlist.component.css']
})
export class PostPlaylistComponent implements OnInit {
  availableGenreTags = [
    'Acid House',
    'Chicago House',
    'Deep House',
    'Diva House',
    'Dutch House',
    'Electro House',
    'Freestyle House',
    'French House',
    'Funky House',
    'Ghetto House',
    'Hardbag',
    'Hip House',
    'Italo House',
    'Latin House',
    'Minimal House',
    'Progressive House',
    'Rave Music',
    'Swing House',
    'Tech House',
    'Tribal House',
    'UK Hard House',
    'US Garage',
    'Vocal House'
  ];
  playlistUrl: string;
  tagsForPlaylist = [];
  playlistId: string;
  playlistPreviewInfo: any;
  postPlaylistForm: FormGroup;
  submitted: boolean;

  constructor(private playlistService: PlaylistsService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.postPlaylistForm = this.formBuilder.group(
      {
        playlistUrl: ['', Validators.required],
        genreTag: [[], Validators.required]
      },
      { validators: this.validateUrl }
    );
  }

  get f() {
    return this.postPlaylistForm.controls;
  }

  addTag(event: any) {
    console.log('adding tag', event);
    this.tagsForPlaylist.push(event.target.value.split(': ')[1]);
  }

  removeTag(tagForRemoval: any) {
    this.tagsForPlaylist = this.tagsForPlaylist.filter(tag => tag != tagForRemoval);
  }

  validateUrl: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let url = group.get('playlistUrl').value;
    console.log(group);
    console.log('validating the url', url);
    return url.indexOf('https://open.spotify.com/playlist/') > -1 ? null : { invalidUrl: true };
  };

  clearPlaylistPreview() {
    this.playlistPreviewInfo = undefined;
  }

  onFormSubmit() {
    this.submitted = true;
    console.log('SUBMITTING', this.f);

    if (this.postPlaylistForm.invalid) {
      console.log('FORM IS INVALID', this.postPlaylistForm);
      return;
    } else {
      this.getPlaylistPreview();
    }
  }

  getPlaylistPreview() {
    const playlistUrl = this.f.playlistUrl.value;
    var playlistId = this.getPlaylistIDFromUrl(playlistUrl);

    this.playlistService.getSpotifyPlaylistInfoById(playlistId).subscribe(response => {
      console.log('This is the response from get playlist info by id', response);
      this.playlistPreviewInfo = response;
    });
  }

  postPlaylist() {
    const playlistUrl = this.f.playlistUrl.value;
    var playlistId = this.getPlaylistIDFromUrl(playlistUrl);

    this.playlistService.postPlaylist(playlistId, this.tagsForPlaylist).subscribe(
      response => {
        console.log('This is the response from post playlist', response);
        if (response.data) {
          this.router.navigate(['/playlist/' + playlistId]);
        }
      },
      err => {
        alert(
          'There was an issue while trying to submit your playlist. It is possible that this playlist has already been submitted by another user.'
        );
        this.clearPlaylistPreview();
      }
    );
  }

  getPlaylistIDFromUrl(url: string) {
    const playlistId = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('?'));

    return playlistId;
  }
}
