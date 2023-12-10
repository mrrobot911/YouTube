import { Injectable } from '@angular/core';

@Injectable()
export default class SearchService {
  public showCards = '';

  public setCards(value: string) {
    this.showCards = value;
  }
}
