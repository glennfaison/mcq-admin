import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionDetailsModalComponent } from './option-details-modal.component';

describe('OptionDetailsModalComponent', () => {
  let component: OptionDetailsModalComponent;
  let fixture: ComponentFixture<OptionDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
