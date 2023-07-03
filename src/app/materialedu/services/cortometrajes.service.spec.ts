import { TestBed } from '@angular/core/testing';

import { CortometrajesService } from './cortometrajes.service';

describe('CortometrajesService', () => {
  let service: CortometrajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CortometrajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
