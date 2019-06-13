import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { TableSettings } from 'src/app/common/models/TableSettings.model';
import { CoreService } from 'src/app/common/services/core.service';
import { Course } from 'src/app/common/models/Course.model';
import { CourseService } from 'src/app/common/services/course.service';

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

  constructor(
    private core: CoreService,
    private courseSvc: CourseService,
  ) {
    this.tblStx = this.core.defaultTableSettings;
    this.fetchCourses();
    this.itemList = require('../../../assets/courses.json');
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
      const res = await this.courseSvc.fetchCourses();
      this.itemList = res ? [...res] : [];
    } catch (error) {
      console.log(error);
    }
  }

  async updateCourse(item: Course): Promise<void> {
    try {
      const newItem = await this.courseSvc.updateCourse(item);
      this.itemList = [...this.itemList, newItem];
      this.fetchCourses();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCourse(): Promise<void> {
    try {
      await this.courseSvc.fetchCourses();
    } catch (error) {
      console.log(error);
    }
  }

}
