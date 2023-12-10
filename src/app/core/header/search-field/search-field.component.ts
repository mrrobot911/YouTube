import {
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import SearchService from '../../services/search.service';
import ToggleService from '../../services/toggle.service';

@Component({
  selector: 'youtube-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export default class SearchFieldComponent {
  constructor(
    private readonly searchService: SearchService,
    private readonly toggleService: ToggleService,
  ) {}

  public buttonValue = 'search';

  public showFilterBlock() {
    this.toggleService.setShowCards();
  }

  public searchControl = new FormControl<string>('', { nonNullable: true });

  public showCards() {
    this.searchService.setCards(this.searchControl.value);
  }
}
