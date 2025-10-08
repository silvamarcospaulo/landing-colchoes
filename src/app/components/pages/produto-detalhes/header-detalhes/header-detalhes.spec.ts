import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderDetalhes } from './header-detalhes';

describe('HeaderDetalhes', () => {
  let component: HeaderDetalhes;
  let fixture: ComponentFixture<HeaderDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDetalhes]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderDetalhes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
