import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualEscolher } from './qual-escolher';

describe('QualEscolher', () => {
  let component: QualEscolher;
  let fixture: ComponentFixture<QualEscolher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualEscolher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualEscolher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
