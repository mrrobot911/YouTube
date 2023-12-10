import { Injectable } from '@angular/core';

@Injectable()
export default class SearchService {
  public searchValue = { search: '' };

  public setCards(value: string) {
    this.searchValue.search = value;
  }
}
