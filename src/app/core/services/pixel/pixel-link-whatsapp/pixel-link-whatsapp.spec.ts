import { TestBed } from '@angular/core/testing';
import { PixelLinkWhatsappService } from './pixel-link-whatsapp.service';

describe('PixelLinkWhatsapp', () => {
  let service: PixelLinkWhatsappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PixelLinkWhatsappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
