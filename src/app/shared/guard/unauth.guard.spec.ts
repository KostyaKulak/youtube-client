import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './unauth.guard';

describe('UnauthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
