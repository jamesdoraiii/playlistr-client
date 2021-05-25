import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeeAllItemsService {
  title: string;
  items: any[];

  constructor() {}

  setTitle(title: string) {
    this.title = title;
  }

  setItems(items: any[]) {
    this.items = items;
  }
}
