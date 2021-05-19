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

  get positionX(): boolean {
    return this.contextMenuService.positionX;
  }

  get positionY(): boolean {
    return this.contextMenuService.positionY;
  }

  constructor(private contextMenuService: ContextMenuService) {}

  ngOnInit(): void {}

  addToQueue() {}

  goToArtist() {}

  goToAlbum() {}
}
