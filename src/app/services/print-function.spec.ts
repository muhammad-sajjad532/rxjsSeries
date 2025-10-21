import { TestBed } from '@angular/core/testing';

import { PrintFunction } from './print-function';

describe('PrintFunction', () => {
  let service: PrintFunction;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintFunction);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
