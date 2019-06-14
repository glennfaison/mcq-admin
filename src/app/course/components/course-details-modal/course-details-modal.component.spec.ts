import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsModalComponent } from './course-details-modal.component';

describe('CourseDetailsModalComponent', () => {
  let component: CourseDetailsModalComponent;
  let fixture: ComponentFixture<CourseDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
