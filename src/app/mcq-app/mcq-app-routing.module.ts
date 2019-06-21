import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { QuizHistoryComponent } from './components/quiz-history/quiz-history.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      { path: '', component: HomeComponent },
    ]
  },
  {
    path: 'quizzes',
    children: [
      { path: ':id', component: QuizComponent },
      { path: 'results', component: QuizResultComponent },
    ]
  },
  {
    path: 'profile',
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
