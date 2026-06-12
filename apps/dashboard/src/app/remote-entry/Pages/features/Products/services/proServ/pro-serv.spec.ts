import { TestBed } from '@angular/core/testing';

import { ProServ } from './pro-serv';

describe('ProServ', () => {
  let service: ProServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
