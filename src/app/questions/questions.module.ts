import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { QuestionDetailsModalComponent } from './components/question-details-modal/question-details-modal.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionDetailsModalComponent,
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    FormsModule,
    NgxDatatableModule,
    FilterPipeModule,
    CoreModule,
  ],
  providers: []
})
export class QuestionsModule { }
