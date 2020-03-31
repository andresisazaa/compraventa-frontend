import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private authService: AuthService) { }
  title = 'compraventa-frontend';

  ngOnInit(): void {
    this.checkAuth();
  }

  checkAuth() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

}
