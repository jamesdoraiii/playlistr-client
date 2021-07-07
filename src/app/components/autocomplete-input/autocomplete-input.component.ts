import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.css']
})
export class AutocompleteInputComponent {
  @Input() options: any[];
  @Output() selected = new EventEmitter<string>();

  onSelect(item: any) {
    this.selected.emit(item);
    var input: any = document.getElementById('tag1');
    input.value = '';
  }

  constructor() {}
}
