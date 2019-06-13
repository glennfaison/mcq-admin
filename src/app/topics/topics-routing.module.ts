import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
  {
    path: 'topics',
    children: [
      { path: '', component: TopicsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule { }
