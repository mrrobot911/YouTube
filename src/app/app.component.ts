import { Component } from '@angular/core';

@Component({
  selector: 'youtube-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'YouTube';

  parentShowCards = '';

  parentFilterCards = false;

  public showCards(value: string) {
    this.parentShowCards = value;
  }

  public showFilterBlock(value: boolean) {
    this.parentFilterCards = value;
  }
}
