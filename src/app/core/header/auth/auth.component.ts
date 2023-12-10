import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'youtube-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent implements OnInit {
  public title = 'Your Name';

  ngOnInit() {
    const user = localStorage.getItem('user');

    if (user) {
      this.title = JSON.parse(user).username;
    }
  }
}
