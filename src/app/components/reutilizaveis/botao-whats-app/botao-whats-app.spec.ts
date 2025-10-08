import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoWhatsApp } from './botao-whats-app';

describe('BotaoWhatsApp', () => {
  let component: BotaoWhatsApp;
  let fixture: ComponentFixture<BotaoWhatsApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoWhatsApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoWhatsApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
