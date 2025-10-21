import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PixelLinkWhatsappService } from '../../../../../core/services/pixel/pixel-link-whatsapp/pixel-link-whatsapp.service';

@Component({
  standalone: true,
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio implements AfterViewInit {
  @ViewChild('iframeWrapper', { static: false }) wrapperRef!: ElementRef<HTMLDivElement>;
  @ViewChild('videoEl', { static: false }) videoRef!: ElementRef<HTMLVideoElement>;

  constructor(
    private snackBar: MatSnackBar,
    private pixel: PixelLinkWhatsappService
  ) { }

  ngAfterViewInit(): void {
    const video = this.videoRef.nativeElement;
    video.muted = true;
    video.play().catch(() => { });
    this.setupScrollTrigger(video);
  }

  private setupScrollTrigger(video: HTMLVideoElement) {
    const wrapper = this.wrapperRef.nativeElement;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(wrapper);
  }

  clicarWhatsapp(event: Event) {
    event.preventDefault();
    const link = 'https://wa.me/81998566535?text=Ol%C3%A1%2C%20quero%20descobrir%20qual%20o%20meu%20colch%C3%A3o%20ideal';
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
