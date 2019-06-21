import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McqAppRoutingModule } from './mcq-app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './components/home/home.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { TopicCardComponent } from './components/topic-card/topic-card.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { QuizHistoryComponent } from './components/quiz-history/quiz-history.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizDetailsModalComponent } from './components/quiz-details-modal/quiz-details-modal.component';
import { UserAnswerCardComponent } from './components/user-answer-card/user-answer-card.component';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    CourseListComponent,
    TopicCardComponent,
    CourseCardComponent,
    TopicListComponent,
    QuizHistoryComponent,
    QuizComponent,
    QuizDetailsModalComponent,
    UserAnswerCardComponent,
    QuizResultComponent,
  ],
  imports: [
    CommonModule,
    McqAppRoutingModule,
    FormsModule,
    NgxDatatableModule,
    FilterPipeModule,
    CoreModule,
    RouterModule,
  ]
})
export class McqAppModule { }
