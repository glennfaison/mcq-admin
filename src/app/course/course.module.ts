import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { CourseRoutingModule } from './course-routing.module';
import { LogoutModalComponent } from '../common/common-components/logout-modal/logout-modal.component';
import { ScrollToTopButtonComponent } from '../common/common-components/scroll-to-top-button/scroll-to-top-button.component';
import { FooterComponent } from '../common/common-components/footer/footer.component';
import { NavbarComponent } from '../common/common-components/navbar/navbar.component';
import { SidebarComponent } from '../common/common-components/sidebar/sidebar.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    CoursesComponent,
    LogoutModalComponent,
    ScrollToTopButtonComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule,
    NgxDatatableModule,
    FilterPipeModule,
  ],
  providers: []
})
export class CourseModule { }
