import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'youtube-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export default class AuthPageComponent {
  constructor() {
    this.error = null;
  }

  myGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.myGroup.valid) {
      this.submitEM.emit(this.myGroup.value);
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
