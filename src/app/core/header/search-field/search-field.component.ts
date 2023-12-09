import {
  Component, inject,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import SearchService from '../../services/search.service';

@Component({
  selector: 'youtube-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export default class SearchFieldComponent {
  private readonly searchService: SearchService = inject(SearchService);

  public buttonValue = 'search';

  public showFilterBlock() {
    this.searchService.setShowCards();
  }

  // public searchControl = this.searchService.getSearchvalue();
  public searchControl = new FormControl<string>('', { nonNullable: true });

  public showCards() {
    this.searchService.setCards();
  }

  ngOnInit() {
    this.searchControl.valueChanges.subscribe((value) => {
      this.searchService.updateSearchValue(value);
    });
  }

  // ChangeInput() {
  //   this.searchService.updateSearchValue(this.value);
  // }
}
