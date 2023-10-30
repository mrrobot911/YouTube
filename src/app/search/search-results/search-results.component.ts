import { Component, Input } from '@angular/core';
import mockEntities from 'src/app/db/response';
import { SearchItem } from '../search-item.model';

@Component({
  selector: 'youtube-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  @Input()
    showCards = '';

  @Input()
    filterDate = false;

  @Input()
    filterView = false;

  responseCardsArrey: SearchItem[] = mockEntities.items;
}
