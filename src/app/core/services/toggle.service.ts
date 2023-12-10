import { Injectable } from '@angular/core';

@Injectable()
export default class ToggleService {
  public showFilterBlock = { toggle: false };

  public setShowCards() {
    this.showFilterBlock.toggle = !this.showFilterBlock.toggle;
  }
}
