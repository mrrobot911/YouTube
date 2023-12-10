import { Component } from '@angular/core';
import SearchService from 'src/app/core/services/search.service';

@Component({
  selector: 'youtube-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export default class MainPageComponent {
  constructor(private readonly searchService: SearchService) {}

  public showCards = this.searchService.searchValue;
}
