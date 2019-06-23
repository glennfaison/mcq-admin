import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { TableSettings } from 'src/app/core/models/TableSettings.model';
import { Course } from 'src/app/core/models/Course.model';
import { CoreService } from 'src/app/core/services/core.service';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  @ViewChild('datatable') datatable: DatatableComponent;

  tblStx: TableSettings = new TableSettings();
  searchFilter: string = '';
  itemList: Course[] = [];
  selectedItem: Course;
  selectAction: 'view' | 'edit' | 'delete' | 'create';

  constructor(
    private core: CoreService,
    private courseSvc: CourseService,
  ) {
    this.tblStx = this.core.defaultTableSettings;
    this.fetchCourses();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.datatable.columnMode = ColumnMode.force;
  }

  async createCourse(item: Course): Promise<void> {
    try {
      const newItem = await this.courseSvc.createCourse(item);
      this.itemList = [...this.itemList, newItem];
      this.fetchCourses();
    } catch (error) {
      console.log(error);
    }
  }

  async fetchCourses(): Promise<void> {
    try {
      const res: Course[] = await this.courseSvc.fetchCourses();
      if (!Array.isArray(res)) { throw res; }
      this.itemList = res || [];
    } catch (error) {
      console.log(error);
    }
  }

  async updateCourse(item: Course): Promise<void> {
    try {
      const newItem = await this.courseSvc.updateCourse(item);
      this.fetchCourses();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCourse(id): Promise<void> {
    try {
      await this.courseSvc.deleteCourse(id);
      this.fetchCourses();
    } catch (error) {
      console.log(error);
    }
  }

  selectOneItem(item: Course, reason: 'view' | 'edit' | 'delete' | 'create') {
    this.selectedItem = { ...item };
    this.selectAction = reason;
  }

  onModalConfirmed(item: Course) {
    try {
      switch (this.selectAction) {
        case 'delete':
          this.deleteCourse(item._id);
          break;
        case 'edit':
          this.updateCourse(item);
          break;
        case 'create':
          this.createCourse(item);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.clearModalData();
    }
  }

  clearModalData() {
    this.selectAction = null;
    this.selectedItem = null;
  }

}
