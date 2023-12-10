import {
  Component,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'youtube-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export default class AuthPageComponent {
  constructor(private router: Router) {}

  myGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  public error = this.myGroup.errors;

  submit() {
    if (this.myGroup.valid) {
      localStorage.setItem('user', JSON.stringify(this.myGroup.value));
      this.router.navigate(['/main']);
    }
  }
}
