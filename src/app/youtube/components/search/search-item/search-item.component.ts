import {
  Component, EventEmitter, Output, inject,
} from '@angular/core';
import SearchService from 'src/app/core/services/search.service';

@Component({
  selector: 'youtube-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  private readonly searchService: SearchService = inject(SearchService);

  public date = false;

  public view = false;

  public search = '';

  public showFilterBlock = this.searchService.getIsShowCards();

  @Output()
    outDate = new EventEmitter<boolean>();

  @Output()
    outView = new EventEmitter<boolean>();

  @Output()
    outWord = new EventEmitter<string>();

  public filterDate() {
    this.date = !this.date;
    this.outDate.emit(this.date);
  }

  public filterView() {
    this.view = !this.view;
    this.outView.emit(this.view);
  }

  public filterWord() {
    this.outWord.emit(this.search);
  }
}
