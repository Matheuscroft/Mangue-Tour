import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PontoTuristicoPage } from './ponto-turistico.page';

describe('PontoTuristicoPage', () => {
  let component: PontoTuristicoPage;
  let fixture: ComponentFixture<PontoTuristicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PontoTuristicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});