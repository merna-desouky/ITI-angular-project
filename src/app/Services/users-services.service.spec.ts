import { TestBed } from '@angular/core/testing';

import { UsersServicesService } from './users-services.service';

describe('UsersServicesService', () => {
  let service: UsersServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
