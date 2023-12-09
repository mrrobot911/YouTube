import { Injectable } from '@angular/core';

@Injectable()
export default class SearchService {
  public showFilterBlock = { a: false };

  public showCards = { search: '' };

  public setCards(value: string) {
    this.showCards = { search: value };
  }

  public setShowCards() {
    this.showFilterBlock.a = !this.showFilterBlock.a;
  }
}
