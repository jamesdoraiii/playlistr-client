import { Component, Input, OnChanges } from '@angular/core';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.css']
})
export class ItemHeaderComponent implements OnChanges {
  @Input() item: any;
  @Input() headerBackground: any;
  @Input() padTop: boolean;
  @Input() playlistrDetails?: any;
  isOwner: boolean;

  constructor(private auth: AuthService) {}

  ngOnChanges() {
    // console.log('these are the playlistr details', this.playlistrDetails);
    if (this.playlistrDetails) {
      this.isOwner = this.auth.isOwner(this.playlistrDetails.ownerUsername);
    }
  }
}
