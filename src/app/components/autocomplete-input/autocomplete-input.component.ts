import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.css']
})
export class AutocompleteInputComponent implements OnInit {
  @Input() options: any[];
  selectedItem: any = '';
  inputChanged: any = '';

  items2: any[] = [
    { id: 0, payload: { label: 'Tom' } },
    { id: 1, payload: { label: 'John' } },
    { id: 2, payload: { label: 'Lisa' } },
    { id: 3, payload: { label: 'Js' } },
    { id: 4, payload: { label: 'Java' } },
    { id: 5, payload: { label: 'c' } },
    { id: 6, payload: { label: 'vc' } }
  ];
  config2: any = { placeholder: 'test', sourceField: ['payload', 'label'] };

  onSelect(item: any) {
    this.selectedItem = item;
  }

  onInputChangedEvent(val: string) {
    this.inputChanged = val;
  }

  constructor() {}

  ngOnInit(): void {}
}
