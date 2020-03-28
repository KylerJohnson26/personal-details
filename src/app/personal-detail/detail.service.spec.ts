import { TestBed } from '@angular/core/testing';

import { DetailsStoreService } from './details-store.service';

describe('DetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsStoreService = TestBed.get(DetailsStoreService);
    expect(service).toBeTruthy();
  });
});
