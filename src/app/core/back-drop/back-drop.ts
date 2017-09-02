import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './back-drop.html',
  styleUrls: ['./back-drop.scss']
})
export class AppComponent {
  title = 'Welcome to School-Book-Now';
  signUpView = true; // change when login is implemented
  constructor(private router: Router ) {
      console.log(router.routerState);
  }

  onLogIn(successfulLogin: boolean) {
    console.log('Hello');
    this.signUpView = successfulLogin;
  }

}
