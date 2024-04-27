import { TestBed } from '@angular/core/testing';

import { EcommBackendService } from './ecomm-backend-service.service';

describe('EcommBackendService', () => {
  let service: EcommBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
