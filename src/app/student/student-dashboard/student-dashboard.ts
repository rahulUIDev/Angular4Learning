import { Component,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
  } from '@angular/core';

@Component({
  selector: 'app-std-board',
  template: require('./student-dashboard.html'),
  styleUrls: ['./student-dashboard.scss']
})
export class StudentBoardComponent {
  title = 'Welcome to SchoolBoard';
}
