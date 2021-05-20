import { Component, OnInit } from '@angular/core';

import { ContextMenuService } from '@services/context-menu.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {
  get isContextMenuOpen(): boolean {
    return this.contextMenuService.isContextMenuOpen;
  }
  set isContextMenuOpen(value: boolean) {
    this.contextMenuService.isContextMenuOpen = value;
  }

  get positionX() {
    return this.contextMenuService.positionX;
  }

  get positionY() {
    return this.contextMenuService.positionY;
  }

  constructor(private contextMenuService: ContextMenuService) {}

  ngOnInit(): void {}

  hideContextMenu() {
    this.isContextMenuOpen = false;
  }

  addToQueue() {
    this.contextMenuService.addToQueue();
    this.hideContextMenu();
  }

  goToArtist() {
    this.contextMenuService.goToArtist();
    this.hideContextMenu();
  }

  goToAlbum() {
    this.contextMenuService.goToAlbum();
    this.hideContextMenu();
  }
}
