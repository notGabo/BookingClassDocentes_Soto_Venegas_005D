import { TestBed } from '@angular/core/testing';

import { RegistroProfesorService } from './registro-profesor.service';

describe('RegistroProfesorService', () => {
  let service: RegistroProfesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroProfesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
