import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from './topics/topics.component';
import { CommonComponentsModule } from '../common/common-components/common-components.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TopicsComponent,
  ],
  imports: [
    CommonComponentsModule,
    BrowserModule,
    FormsModule,
    NgxDatatableModule,
    FilterPipeModule,
    TopicsRoutingModule,
  ]
})
export class TopicsModule { }
