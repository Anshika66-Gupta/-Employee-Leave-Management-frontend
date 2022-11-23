import { TestBed } from '@angular/core/testing';

import { LoGuard } from './lo.guard';

describe('LoGuard', () => {
  let guard: LoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
