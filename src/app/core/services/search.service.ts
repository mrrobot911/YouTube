import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  private showFilterBlock = false;

  private showCards = '';

  public filter = false;

  public setCards(value: string) {
    this.showCards = value;
  }

  public setShowCards() {
    this.showFilterBlock = !this.showFilterBlock;
  }

  public getCards() {
    return this.showCards;
  }

  public getIsShowCards() {
    return this.showFilterBlock;
  }
}
