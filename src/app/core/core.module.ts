import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SigninComponent} from './signin/signin';
import {HeaderComponent} from './header/header';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [HeaderComponent, SigninComponent],
  exports: [HeaderComponent, SigninComponent],
  providers:[]
})

export class CoreModule {
}
