import { TestBed } from '@angular/core/testing';

import { RoleManagementServiceService } from './role-management-service.service';

describe('RoleManagementServiceService', () => {
  let service: RoleManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
