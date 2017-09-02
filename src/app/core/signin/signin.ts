/**
 * Created by rahul on 4/20/17.
 */

import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { SignInServices } from './signin.service';
import { AppAPI } from 'app/api/app.api';
import { User, SignIn, Response } from './signin.model';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  moduleId: module.id,
  selector: 'app-sign-in',
  template: require('./signin.html'),
  styleUrls: ['./signin.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
    /*trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])*/
  ],
  providers: [ SignInServices, AppAPI ]
})

export class SigninComponent {
  textTest = 'School Book';
  userProfileImg = '../../assets/images/praveen.jpg';
  userProfileName = 'Praveen Chundi';
  @Input() signIn: SignIn;
  editUser: SignIn = <SignIn>{};
  users: User[];
  response: Response = <Response>{};
  state = 'inactive';
  section = false;
  userLogInSucess = false;
  @Output() onLogIn = new EventEmitter<boolean>();
  updateState() {
      this.section = true;
      this.state = 'active';
  }
  constructor(private singInService: SignInServices, private router: Router) { }
 /* ngOnInit() {
    this.singInService.checkUser()
      .subscribe(users => this.users = users);
  }*/
  private setEditCharacter(signIn: SignIn) {
    if (signIn) {
      this.signIn = signIn;
    }
  }
  next() {
    this.userLogInSucess = true;
    this.onLogIn.emit(this.userLogInSucess);
    console.log('Emitting Event');
    this.router.navigate(['student']);
  }
  getIn() {
    const userDetails = this.editUser;
    if ( userDetails.userId || userDetails.passCode ) {
      this.singInService.signUpUsers(userDetails).subscribe(response => this.response = response);
      console.log(this.response);
    }
  }
}
