import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { CourseRoutingModule } from './course-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CourseDetailsModalComponent } from './courses/course-details-modal/course-details-modal.component';
import { CommonComponentsModule } from '../common/common-components/common-components.module';
import { BrowserModule } from '@angular/platform-browser';

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
    CommonComponentsModule,
  ],
  providers: []
})
export class CourseModule { }
