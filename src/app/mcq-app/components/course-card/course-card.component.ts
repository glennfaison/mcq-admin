import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/core/models/Course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;
  isSelected = true;
  color: string;

  constructor() {
    this.setColor();
  }

  ngOnInit() {
  }

  setColor() {
    const colors = ['primary', 'secondary', 'info', 'success', 'warning', 'danger'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

}
