import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {
  positionX;
  positionY;
  isContextMenuOpen;

  constructor() {}

  openContextMenu(event: any) {
    this.positionX = event.clientX;
    this.positionX = event.clientY;
    var menu = document.getElementById('contextMenu');
    menu.style.top = event.clienty;
    menu.style.left = event.clientX;
  }

  addToQueue() {}

  goToArtist() {}

  goToAlbum() {}
}
