import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ISO 9001 Dashboard';

  constructor(public auth: AuthService) {}

  async ngOnInit() {
    await this.auth.init();
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}

