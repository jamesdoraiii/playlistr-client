import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BaseService } from '@services/base.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: any;

  constructor(private route: ActivatedRoute, private baseService: BaseService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const albumId = this.route.snapshot.paramMap.get('albumId');
      this.baseService.getItemDetail('albums', albumId).subscribe(result => {
        this.album = result;
        this.album.tracks.items.forEach(track => {
          track.album = this.album;
        });
      });
    });
  }
}
