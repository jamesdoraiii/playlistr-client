import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebPlayerService } from '@services/web-player.service';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {
  positionX = 0;
  positionY = 0;
  isContextMenuOpen;
  item: any;

  constructor(private router: Router, private webPlayer: WebPlayerService) {}

  openContextMenu(event: MouseEvent, item: any) {
    this.positionX = event.clientX;
    this.positionY = event.clientY;
    this.item = item;
    console.log('These are the current values that I have', this.item, this.positionX, this.positionY);
    this.isContextMenuOpen = true;
  }

  addToQueue() {
    // this.webPlayer.
  }

  goToArtist() {
    this.router.navigate(['/artist/' + this.item.artists[0].id]);
  }

  goToAlbum() {
    this.router.navigate(['/album/' + this.item.album.id]);
  }
}
