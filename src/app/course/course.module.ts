import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseRoutingModule } from './course-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { CourseDetailsModalComponent } from './components/course-details-modal/course-details-modal.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsModalComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule,
    NgxDatatableModule,
    FilterPipeModule,
    CoreModule,
  ],
  providers: []
})
export class CourseModule { }
