import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/core/models/Course.model';
import { CoreService } from 'src/app/core/services/core.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-course-details-modal',
  templateUrl: './course-details-modal.component.html',
  styleUrls: ['./course-details-modal.component.css']
})
export class CourseDetailsModalComponent implements OnInit {

  @Input() selectedItem: Course;
  @Input() selectAction: 'view' | 'edit' | 'delete' | 'create';
  @Output() confirm: EventEmitter<Course> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  constructor(
    private core: CoreService,
    private auth: AuthService,
  ) {
    if (!this.selectedItem) { this.setCourseAuthor(); }
  }

  ngOnInit() {}

  async setCourseAuthor() {
    const item = new Course();
    const thisUser = this.core.thisUser ? this.core.thisUser : await this.auth.getThisUser();
    item.createdBy = thisUser._id;
    this.selectedItem = item;
  }

  action() {
    this.confirm.emit(this.selectedItem);
  }

  close() {
    this.cancel.emit();
  }

}
