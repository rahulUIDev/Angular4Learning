import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { StudentModule } from './student/student.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// compontent imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/back-drop/back-drop';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    StudentModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
