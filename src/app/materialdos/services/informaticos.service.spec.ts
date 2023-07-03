import { TestBed } from '@angular/core/testing';

import { InformaticosService } from './informaticos.service';

describe('InformaticosService', () => {
  let service: InformaticosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformaticosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
