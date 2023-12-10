import {
  Component,
} from '@angular/core';
import ToggleService from 'src/app/core/services/toggle.service';
import FilterService from 'src/app/youtube/services/filter.service';

@Component({
  selector: 'youtube-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  constructor(
    private readonly toggleService: ToggleService,
    private readonly filterService: FilterService,
  ) {}

  public search = this.filterService.filter.searchWord;

  public showFilterBlock = this.toggleService.showFilterBlock;

  public filterDate() {
    this.filterService.filterDate();
  }

  public filterView() {
    this.filterService.filterView();
  }

  public filterWord() {
    this.filterService.filterWord(this.search);
  }
}
