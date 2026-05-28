import { TestBed } from '@angular/core/testing';

import { ProfileServ } from './profile-serv';

describe('ProfileServ', () => {
  let service: ProfileServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
