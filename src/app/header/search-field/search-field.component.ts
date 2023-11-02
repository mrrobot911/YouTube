import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'youtube-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export default class SearchFieldComponent {
  public buttonValue = 'search';

  public filter = false;

  public value = '';

  @Output()
    outShowFilterBlock = new EventEmitter<boolean>();

  @Output()
    outShowCards = new EventEmitter<string>();

  public showFilterBlock() {
    this.filter = !this.filter;
    this.outShowFilterBlock.emit(this.filter);
  }

  public showCards() {
    this.outShowCards.emit(this.value);
  }
}
