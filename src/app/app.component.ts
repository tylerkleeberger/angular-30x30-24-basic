import { Component } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Basic';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/main', icon: 'dashboard', title: 'Main' }, 
    { path: '/minor', icon: 'extension', title: 'Minor' },
  ];

  constructor(private authService: AuthService) {}

  isAuthenticated$ = this.authService.isAuthenticated$.pipe(shareReplay(1));

  logout() {
    this.authService.logout();
  }
}
