import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '@services/artists.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: any;

  constructor(private route: ActivatedRoute, private artistsService: ArtistsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const albumId = this.route.snapshot.paramMap.get('albumId');
      // this.fetchArtist(artistId);
    });
  }
}
