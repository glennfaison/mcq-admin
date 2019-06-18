import { TestBed } from '@angular/core/testing';

import { UserQuizService } from './user-quiz.service';

describe('UserQuizStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserQuizService = TestBed.get(UserQuizService);
    expect(service).toBeTruthy();
  });
});
