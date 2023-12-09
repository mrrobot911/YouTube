import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  private showFilterBlock = false;

  private showCards = false;

  public filter = false;

  // public videosSource = new BehaviorSubject<SearchResponce | null>(null);

  private valueSource = new BehaviorSubject('');

  public readonly value$ = this.valueSource.asObservable();

  // filteredVideos$: Observable<SearchItem[]>;

  // constructor() {
  //   // TODO
  //   this.filteredVideos$ = this.videosSource.pipe(
  //     combineLatestWith(this.value$),
  //     map(([videos, value]) => {
  //       if (videos === null) {
  //         return [];
  //       }
  //       return [];
  //       // videos.items.filter( TODO!!!
  //     }),
  //   );
  // }

  public updateSearchValue(value: string) {
    this.valueSource.next(value);
  }

  public setCards() {
    this.showCards = !this.showCards;
  }

  public setShowCards() {
    this.showFilterBlock = !this.showFilterBlock;
  }
}
