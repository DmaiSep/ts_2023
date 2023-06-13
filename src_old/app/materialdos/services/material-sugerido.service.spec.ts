import { TestBed } from '@angular/core/testing';

import { MaterialSugeridoService } from './material-sugerido.service';

describe('MaterialSugeridoService', () => {
  let service: MaterialSugeridoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialSugeridoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
