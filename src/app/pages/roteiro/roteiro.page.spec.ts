import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoteiroPage } from './roteiro.page';

describe('RoteiroPage', () => {
  let component: RoteiroPage;
  let fixture: ComponentFixture<RoteiroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoteiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
