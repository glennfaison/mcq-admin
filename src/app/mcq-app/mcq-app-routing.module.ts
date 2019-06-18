import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { QuizHistoryComponent } from './components/quiz-history/quiz-history.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      { path: '', component: HomeComponent },
    ]
  },
  {
    path: 'quizes/:id',
    pathMatch: 'full',
    children: [
      { path: '', component: QuizComponent },
    ]
  },
  {
    path: 'quiz-history',
    pathMatch: 'full',
    children: [
      { path: '', component: QuizHistoryComponent },
    ]
  },
  {
    path: 'new-quiz',
    children: [
      { path: '', component: CourseListComponent },
      {
        path: 'topics',
        children: [
          { path: '', component: TopicListComponent },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class McqAppRoutingModule { }
