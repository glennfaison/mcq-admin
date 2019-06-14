import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Course } from '../models/Course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private httpSvc: HttpService,
  ) { }

  async createCourse(course: Course): Promise<Course> {
    try {
      const url = `${this.httpSvc.apiRoot}/courses`;
      const res = await this.httpSvc.post(url, course);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async fetchCourses(): Promise<Course[]> {
    try {
      const url = `${this.httpSvc.apiRoot}/courses`;
      const res = await this.httpSvc.get(url, {});
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async updateCourse(course: Course): Promise<Course> {
    try {
      delete course.createdAt;
      delete course.updatedAt;
      const url = `${this.httpSvc.apiRoot}/courses/${course._id}`;
      const res = await this.httpSvc.put(url, course);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async deleteCourse(id: any): Promise<void> {
    try {
      const url = `${this.httpSvc.apiRoot}/courses/${id}`;
      const res = await this.httpSvc.put(url, {});
      if (!!res.error) { throw res; }
    } catch (error) {
      throw error;
    }
  }
}
