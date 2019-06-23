import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { McqAppModule } from './mcq-app/mcq-app.module';
// import { AuthGuard } from './common/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => McqAppModule,
    // loadChildren: './mcq-app/mcq-app.module#McqAppModule',
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './dashboards/dashboards.module#DashboardsModule',
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './courses/courses.module#CoursesModule',
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './topics/topics.module#TopicsModule',
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './questions/questions.module#QuestionsModule',
  },
  {
    path: '404',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: '/404',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AuthGuard]
})
export class AppRoutingModule { }
