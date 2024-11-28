import { TestBed } from '@angular/core/testing';

import { RoteiroService } from './roteiro.service';

describe('RoteiroService', () => {
  let service: RoteiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoteiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
