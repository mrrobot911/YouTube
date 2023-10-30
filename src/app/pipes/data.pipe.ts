import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../search/search-item.model';

@Pipe({
  name: 'datePipe',
})
export default class OrderPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(cards: SearchItem[], value: boolean): SearchItem[] {
    if (!value) {
      return [...cards].sort((a, b) => Math.abs(new Date(a.snippet.publishedAt).getTime()
      - new Date(b.snippet.publishedAt).getTime()));
    }

    return [...cards].sort((a, b) => Math.abs(new Date(b.snippet.publishedAt).getTime()
    - new Date(a.snippet.publishedAt).getTime()));
  }
}
