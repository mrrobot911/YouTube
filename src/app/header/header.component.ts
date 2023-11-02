import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'youtube-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Output()
    outShowCards = new EventEmitter<string>();

  @Output()
    outShowFilterBlock = new EventEmitter<boolean>();

  public showCards(value: string) {
    this.outShowCards.emit(value);
  }

  public showFilterBlock(value: boolean) {
    this.outShowFilterBlock.emit(value);
  }
}
