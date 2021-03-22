import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '@services/artists.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  artist: any;
  artistTopTracks: any;
  artistAlbums: any;

  constructor(private route: ActivatedRoute, private artistsService: ArtistsService) {}

  ngOnInit(): void {
    const artistId = this.route.snapshot.paramMap.get('artistId');
    this.route.paramMap.subscribe(params => {
      this.fetchArtist(artistId);
      this.fetchArtistAlbums(artistId);
      this.fetchArtistTopTracks(artistId);
      // this.fetchRelatedArtist(artistId);
    });
  }

  fetchArtist(artistId) {
    this.artistsService.getArtistById(artistId).subscribe((result: any) => {
      this.artist = result;
      console.log('This is the artist', result);
    });
  }

  fetchArtistTopTracks(artistId) {
    this.artistsService.getArtistTopTracksById(artistId).subscribe((result: any) => {
      this.artistTopTracks = result.tracks;
      console.log('This is the artist top tracks', result);
    });
  }

  fetchArtistAlbums(artistId) {
    this.artistsService.getArtistAlbumsById(artistId).subscribe((result: any) => {
      this.artistAlbums = result.items;
      console.log('this is the artist albums', result);
      this.fetchAlbumTracks();
    });
  }
  fetchRelatedArtist(artistId) {
    this.artistsService.getArtistRelatedArtistsById(artistId).subscribe((result: any) => {
      console.log('this is the related artists', result);
    });
  }

  fetchAlbumTracks() {
    for (let album of this.artistAlbums) {
      this.artistsService.getAlbum(album.href).subscribe((result: any) => {
        console.log('this is a result', result);
        result.tracks.items.forEach(track => {
          track.album = album;
        });
        album['tracks'] = result.tracks.items;
      });
    }
  }
}
