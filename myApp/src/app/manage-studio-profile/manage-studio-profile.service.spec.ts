import { TestBed } from '@angular/core/testing';

import { ManageStudioProfileService } from './manage-studio-profile.service';

describe('ManageStudioProfileService', () => {
  let service: ManageStudioProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageStudioProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
