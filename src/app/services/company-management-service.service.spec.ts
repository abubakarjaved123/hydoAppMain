import { TestBed } from '@angular/core/testing';

import { CompanyManagementServiceService } from './company-management-service.service';

describe('CompanyManagementServiceService', () => {
  let service: CompanyManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
