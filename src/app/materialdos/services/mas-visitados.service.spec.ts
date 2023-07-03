import { TestBed } from '@angular/core/testing';

import { MasVisitadosService } from './mas-visitados.service';

describe('MasVisitadosService', () => {
  let service: MasVisitadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasVisitadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
