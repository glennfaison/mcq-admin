import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from './components/topics/topics.component';

@NgModule({
  declarations: [
    TopicsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    FilterPipeModule,
    TopicsRoutingModule,
  ]
})
export class TopicsModule { }
