import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { payGardGuard } from './pay-gard-guard';

describe('payGardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => payGardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
