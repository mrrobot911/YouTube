import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../search/search-item.model';

@Pipe({
  name: 'viewPipe',
})
export default class ViewPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(cards: SearchItem[], value: boolean): SearchItem[] {
    if (!value) {
      return [...cards].sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
    }

    return [...cards].sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
  }
}
