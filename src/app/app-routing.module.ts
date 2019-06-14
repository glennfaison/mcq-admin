import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './common/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './courses/courses.module#CoursesModule'
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './topics/topics.module#TopicsModule'
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './questions/questions.module#QuestionsModule'
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './options/options.module#OptionsModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AuthGuard]
})
export class AppRoutingModule { }
