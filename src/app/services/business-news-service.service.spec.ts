import { TestBed } from '@angular/core/testing';

import { BusinessNewsServiceService } from './business-news-service.service';

describe('BusinessNewsServiceService', () => {
  let service: BusinessNewsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessNewsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
