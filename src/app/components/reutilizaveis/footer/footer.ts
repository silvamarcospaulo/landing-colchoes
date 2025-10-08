import { Component, Input } from '@angular/core';
import { Link } from '../../../core/models/link/link';
import { ScrollService } from '../../../core/services/scroll/scroll.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PixelLinkWhatsappService } from '../../../core/services/pixel/pixel-link-whatsapp/pixel-link-whatsapp.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  @Input() linksFooter!: Link[];

  constructor(
    private scroll: ScrollService,
    private snackBar: MatSnackBar,
    private pixel: PixelLinkWhatsappService
  ) { }

  go(url: string, event: Event) {
    event.preventDefault();
    const id = url.replace(/^#/, '');
    this.scroll.scrollTo(id);
  }

  clicarWhatsapp(event: Event, numero: string, link: string) {
    event.preventDefault();

    this.pixel.trackWhatsappClick('footer', {
      telefone: numero,
      link: link
    });

    this.snackBar.open(
      'Este site utiliza cookies para melhorar sua experiência e personalizar anúncios. Ao clicar no WhatsApp, você concorda com o uso de cookies.',
      '',
      { duration: 1000, horizontalPosition: 'center', verticalPosition: 'bottom' }
    );

    window.open(link, '_blank');
  }
}