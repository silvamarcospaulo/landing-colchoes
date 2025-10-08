import { Component } from '@angular/core';
import { PixelLinkWhatsappService } from '../../../core/services/pixel/pixel-link-whatsapp/pixel-link-whatsapp.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  selector: 'app-botao-whats-app',
  imports: [],
  templateUrl: './botao-whats-app.html',
  styleUrl: './botao-whats-app.scss'
})
export class BotaoWhatsApp {
  private whatsappUrl =
    'https://wa.me/5564984101024?text=Ol%C3%A1%2C%20quero%20ser%20um%20revendedor%20autorizado%20Gold%20%26%20Silver';

  constructor(
    private pixel: PixelLinkWhatsappService,
    private snackBar: MatSnackBar
  ) { }

  clicarWhatsapp(event: Event) {
    event.preventDefault();
    this.pixel.trackWhatsappClick('botao-flutuante', {
      telefone: "(64) 98410-1024",
      link: "https://wa.me/5564984101024?text=Ol%C3%A1%2C%20quero%20ser%20um%20revendedor%20autorizado%20Gold%20%26%20Silver"
    });

    this.snackBar.open(
      'Este site utiliza cookies para melhorar sua experiência e personalizar anúncios. Ao clicar no WhatsApp, você concorda com o uso de cookies.',
      '',
      { duration: 2000, horizontalPosition: 'center', verticalPosition: 'bottom' }
    );

    window.open(this.whatsappUrl, '_blank');
  }
}