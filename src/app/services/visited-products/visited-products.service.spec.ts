import { TestBed } from '@angular/core/testing';

import { VisitedProductsService } from './visited-products.service';

describe('VisitedProductsService', () => {
  let service: VisitedProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitedProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
