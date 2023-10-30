import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
  selector: 'youtube-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  public date = false;

  public view = false;

  @Input()
    showFilterBlock = false;

  @Output()
    outDate = new EventEmitter<boolean>();

  @Output()
    outView = new EventEmitter<boolean>();

  public filterDate() {
    this.date = !this.date;
    this.outDate.emit(this.date);
  }

  public filterView() {
    this.view = !this.view;
    this.outView.emit(this.view);
  }
}
