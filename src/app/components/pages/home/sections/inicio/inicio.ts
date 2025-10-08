import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PixelLinkWhatsappService } from '../../../../../core/services/pixel/pixel-link-whatsapp/pixel-link-whatsapp.service';

declare var YT: any;

@Component({
  standalone: true,
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})

export class Inicio implements AfterViewInit {
  @ViewChild('iframeWrapper', { static: false }) wrapperRef!: ElementRef<HTMLDivElement>;
  private player: any;

  constructor(
    private snackBar: MatSnackBar,
    private pixel: PixelLinkWhatsappService
  ) { }

  ngAfterViewInit(): void {
    this.loadYouTubeAPI();
  }

  private loadYouTubeAPI() {
    const scriptId = 'youtube-api';
    if (document.getElementById(scriptId)) {
      this.createPlayer();
      return;
    }

    const tag = document.createElement('script');
    tag.id = scriptId;
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    (window as any).onYouTubeIframeAPIReady = () => this.createPlayer();
  }

  private createPlayer() {
    this.player = new YT.Player('player-placeholder', {
      height: '100%',
      width: '100%',
      videoId: 'JYY4BoQBJ9k',
      playerVars: {
        autoplay: 0,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
        loop: 1,
        playlist: 'JYY4BoQBJ9k'
      },
      events: {
        onReady: (event: any) => {
          event.target.setVolume(100);
          event.target.unMute();
          this.setupScrollTrigger(event.target);
        }
      }
    });
  }

  private setupScrollTrigger(player: any) {
    const wrapper = this.wrapperRef.nativeElement;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          player.playVideo();
        } else {
          player.pauseVideo();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(wrapper);
  }

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