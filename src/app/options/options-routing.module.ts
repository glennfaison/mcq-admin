import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptionsComponent } from './components/options/options.component';

const routes: Routes = [
  {
    path: 'options',
    children: [
      { path: '', component: OptionsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule { }
