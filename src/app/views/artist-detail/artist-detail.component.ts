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
    this.route.paramMap.subscribe(params => {
      this.clearArtistInfo();
      const artistId = this.route.snapshot.paramMap.get('artistId');
      this.fetchArtist(artistId);
      this.fetchArtistAlbums(artistId);
      this.fetchArtistTopTracks(artistId);
      // this.fetchRelatedArtist(artistId);
    });
  }

  clearArtistInfo() {
    this.artist = undefined;
    this.artistTopTracks = undefined;
    this.artistAlbums = undefined;
  }

  fetchArtist(artistId) {
    this.artistsService.getArtistById(artistId).subscribe((result: any) => {
      this.artist = result;
    });
  }

  fetchArtistTopTracks(artistId) {
    this.artistsService.getArtistTopTracksById(artistId).subscribe((result: any) => {
      this.artistTopTracks = result.tracks;
    });
  }

  fetchArtistAlbums(artistId) {
    this.artistsService.getArtistAlbumsById(artistId).subscribe((result: any) => {
      this.artistAlbums = result.items;
      this.fetchAlbumTracks();
    });
  }
  fetchRelatedArtist(artistId) {
    this.artistsService.getArtistRelatedArtistsById(artistId).subscribe((result: any) => {});
  }

  fetchAlbumTracks() {
    for (let album of this.artistAlbums) {
      this.artistsService.getAlbum(album.href).subscribe((result: any) => {
        result.tracks.items.forEach(track => {
          track.album = album;
        });
        album['tracks'] = result.tracks.items;
      });
    }
  }
}
