import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'dateOrderPipe',
})
export default class DateOrderPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(cards: SearchItem[], value: boolean): SearchItem[] {
    if (!value) {
      return cards.sort((a, b) => (new Date(a.snippet.publishedAt).getTime()
      - new Date(b.snippet.publishedAt).getTime()));
    }

    return cards.sort((a, b) => (new Date(b.snippet.publishedAt).getTime()
    - new Date(a.snippet.publishedAt).getTime()));
  }
}
