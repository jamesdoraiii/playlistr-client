import { Component, Input, OnChanges } from '@angular/core';

const Vibrant = require('node-vibrant');

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnChanges {
  @Input() item: any;
  @Input() tracks: any;
  @Input() playlistrDetails?: any;
  palette: any;

  constructor() {}

  ngOnChanges(): void {
    this.getVibrantColor(this.item.images[0].url);
  }

  getVibrantColor(url: string) {
    Vibrant.from(url).getPalette((err, palette) => {
      this.palette = palette;
    });
  }

  getHeaderBackground(): any {
    if (this.palette && this.palette.Vibrant) {
      return {
        background: 'linear-gradient(transparent 0,rgba(0,0,0,.7) 100%),' + this.palette.Vibrant.getHex()
      };
    } else {
      return {};
    }
  }

  getTracklistBackground(): any {
    if (this.palette && this.palette.Vibrant) {
      return {
        background: 'linear-gradient(rgba(0,0,0,.8) 0,rgba(45, 55, 72) 100px),' + this.palette.Vibrant.getHex()
      };
    } else {
      return {};
    }
  }
}
