import { TestBed } from '@angular/core/testing';

import { PontosServicoService } from './pontos-servico.service';

describe('PontosServicoService', () => {
  let service: PontosServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PontosServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
