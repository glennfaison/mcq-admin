import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicsRoutingModule } from './topics-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { TopicDetailsModalComponent } from './components/topic-details-modal/topic-details-modal.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    TopicsComponent,
    TopicDetailsModalComponent,
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    FormsModule,
    NgxDatatableModule,
    FilterPipeModule,
    CoreModule,
  ],
  providers: []
})
export class TopicsModule { }
