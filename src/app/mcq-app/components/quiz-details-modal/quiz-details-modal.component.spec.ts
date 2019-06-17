import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDetailsModalComponent } from './quiz-details-modal.component';

describe('QuizDetailsModalComponent', () => {
  let component: QuizDetailsModalComponent;
  let fixture: ComponentFixture<QuizDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
