import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesInicio } from './informacoes-inicio';

describe('InformacoesInicio', () => {
  let component: InformacoesInicio;
  let fixture: ComponentFixture<InformacoesInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacoesInicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacoesInicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
