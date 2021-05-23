import { Component, Input, OnChanges } from '@angular/core';

const Vibrant = require('node-vibrant');

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnChanges {
  @Input() item: any;
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

  styleContainer(): any {
    if (this.palette && this.palette.Vibrant) {
      return {
        background: 'linear-gradient(transparent 0,rgba(0,0,0,.5) 100%),' + this.palette.Vibrant.getHex()
      };
    } else {
      return {};
    }
  }
}
