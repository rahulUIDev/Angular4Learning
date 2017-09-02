/**
 * Created by rahul on 6/22/17.
 */

import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentBoardComponent } from './student-dashboard/student-dashboard';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [StudentBoardComponent],
  exports: [StudentBoardComponent]
})

export class StudentModule {
}
