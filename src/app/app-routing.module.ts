import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './core/signin/signin';
import { StudentBoardComponent } from './student/student-dashboard/student-dashboard';
import { LogService } from 'app/shared/log.service'
/***************************************************************
* Lazy Loading to Eager Loading
*
* 1. Remove the module and NgModule imports in `app.module.ts`
*
* 2. Remove the lazy load route from `app.routing.ts`
*
* 3. Change the module's default route path from '' to 'pathname'
*****************************************************************/
const routes: Routes = [
  // path: 'sbw-student/dashboard', loadChildren: 'app/components/stdDashBoard/stdDashBoard.module#StudentDashBoardModule' },
  // { path: 'sbw-student/dashboard', loadChildren: 'app/components/student-dashboard/student-dashboard.module#studentDashBoardModule'},
  { path: '', redirectTo: 'signin', pathMatch: 'full'},
  { path: 'signin', component: SigninComponent },
  { path: 'student', component: StudentBoardComponent }
  // { path: 'student', loadChildren: './student/student.module#StudentModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [LogService]
})
export class AppRoutingModule { }
