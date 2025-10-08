import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PixelLinkWhatsappService } from '../../../../../core/services/pixel/pixel-link-whatsapp/pixel-link-whatsapp.service';

@Component({
  selector: 'app-beneficios',
  standalone: true,
  imports: [],
  templateUrl: './beneficios.html',
  styleUrl: './beneficios.scss'
})

export class Beneficios {

  constructor(
    private snackBar: MatSnackBar,
    private pixel: PixelLinkWhatsappService
  ) { }

  clicarWhatsapp(event: Event) {
    event.preventDefault();
    const link = "https://wa.me/81998566535?text=Ol%C3%A1%2C%20quero%20descobrir%20qual%20o%20meu%20colchão%20ideal"
    this.pixel.trackWhatsappClick('footer', {
      telefone: '(64) 98410-1024',
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
