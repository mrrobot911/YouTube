import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

@Pipe({
  name: 'containsPipe',
})
export default class ContainsPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(cards: SearchItem[], value: string): SearchItem[] {
    if (value === '') {
      return cards;
    }
    return cards.filter((p) => p.snippet.title.toLowerCase().includes(value.toLowerCase().trim()));
  }
}
