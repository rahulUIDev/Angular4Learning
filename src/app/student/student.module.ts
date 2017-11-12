/**
 * Created by rahul on 6/22/17.
 */

import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentNavigationComponent } from './student-navigation/student-navigation.component';
import { StudentBoardComponent } from './student-dashboard/student-dashboard';
//import { StudentBoardComponent } from './student-dashboard/student-dashboard';


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [StudentNavigationComponent, StudentBoardComponent],
  //declarations: [StudentBoardComponent],
  exports: [StudentNavigationComponent, StudentBoardComponent]
})

export class StudentModule {
}
