import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'welcome',
    children: [
      { path: '', component: WelcomeComponent },
    ]
  },
  {
    path: 'login',
    children: [
      { path: '', component: LoginComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
