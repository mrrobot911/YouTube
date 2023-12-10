import { Component } from '@angular/core';
import mockEntities from 'src/app/db/response';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import FilterService from 'src/app/youtube/services/filter.service';

@Component({
  selector: 'youtube-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  constructor(
    private readonly filterService: FilterService,
  ) {}

  public filterState = this.filterService.filter;

  responseCardsArrey: SearchItem[] = mockEntities.items;
}
