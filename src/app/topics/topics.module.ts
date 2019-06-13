import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from './topics/topics.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    TopicsComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    NgxDatatableModule,
    FilterPipeModule,
    TopicsRoutingModule,
  ]
})
export class TopicsModule { }
