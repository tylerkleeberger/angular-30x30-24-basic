import { Component } from '@angular/core';
import { Auth } from '../auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userInfo: Auth = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService
    ) {}

  login(userInfo: Auth) {
    this.authService.login(userInfo);
  }

}
