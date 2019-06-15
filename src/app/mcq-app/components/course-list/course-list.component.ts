import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.service';
import { Course } from 'src/app/core/models/Course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courseList: Course[];

  constructor(
    private courseSvc: CourseService,
  ) {
    this.fetchCourses();
  }

  ngOnInit() {
  }

  async fetchCourses(): Promise<void> {
    try {
      const res: Course[] = await this.courseSvc.fetchCourses();
      if (!Array.isArray(res)) { throw res; }
      this.courseList = res || [];
    } catch (error) {
      console.log(error);
    }
  }

}
