import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from 'app/shared/log.service'

@Component({
  selector: 'app-root',
  templateUrl: './back-drop.html',
  styleUrls: ['./back-drop.scss']
})
export class AppComponent {
  title = 'Welcome to School-Book-Now';
  signUpView = true; // change when login is implemented
  constructor(private router: Router, private logger: LogService) {
      console.log(router.routerState);
      this.logger.log('Hello Rahul');
  }
}
