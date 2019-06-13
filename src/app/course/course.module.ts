import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { CourseRoutingModule } from './course-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CourseDetailsModalComponent } from './courses/course-details-modal/course-details-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsModalComponent,
  ],
  imports: [
    CourseRoutingModule,
    BrowserModule,
    FormsModule,
    NgxDatatableModule,
    FilterPipeModule,
    CoreModule,
  ],
  providers: []
})
export class CourseModule { }
