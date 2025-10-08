import { Injectable } from '@angular/core';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PixelLinkWhatsappService {

  private pixelId = '619391697616612';
  private pixelLoaded = false;

  private injectPixel(): void {
    if (this.pixelLoaded) return;

    (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', this.pixelId);
    this.pixelLoaded = true;
  }

  trackWhatsappClick(origem?: string, produto?: any): void {
    this.injectPixel();

    if (typeof window.fbq !== 'undefined') {
      window.fbq('trackCustom', 'WhatsappClick', {
        origem: origem || 'default',
        page: window.location.href,
        timestamp: new Date().toISOString(),
        device: navigator.userAgent,
        language: navigator.language,
        screen: `${window.screen.width}x${window.screen.height}`,
        referrer: document.referrer || 'direct',
        ...produto
      });
    } else {
      console.warn('Facebook Pixel não carregado.');
    }
  }
}