import { Injectable } from '@angular/core';

@Injectable()
export default class FilterService {
  public filter = { date: false, view: false, searchWord: '' };

  public filterDate() {
    this.filter.date = !this.filter.date;
  }

  public filterView() {
    this.filter.view = !this.filter.view;
  }

  public filterWord(value: string) {
    this.filter.searchWord = value;
  }
}
