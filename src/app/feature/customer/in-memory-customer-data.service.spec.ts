import { TestBed } from '@angular/core/testing';

import { InMemoryCustomerDataService } from './in-memory-customer-data.service';

describe('InMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryCustomerDataService = TestBed.get(InMemoryCustomerDataService);
    expect(service).toBeTruthy();
  });
});
