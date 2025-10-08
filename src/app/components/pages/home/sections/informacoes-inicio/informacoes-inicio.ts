import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CarouselItem } from '../../../../../core/models/carouselItem/carousel-item';
import { PromoItem } from '../../../../../core/models/promoItem/promo-item';

@Component({
  selector: 'app-informacoes-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informacoes-inicio.html',
  styleUrl: './informacoes-inicio.scss'
})

export class InformacoesInicio implements OnInit, OnDestroy {
  promoItems: PromoItem[] = [
    { label: 'PARCELAMENTO', description: 'em até 10X sem juros em todos os cartões', icon: 'bi bi-credit-card-fill' },
    { label: 'PEDIDOS', description: 'à pronta entrega', icon: 'bi bi-tag' },
    { label: 'FRETE GRÁTIS', description: 'para Goiânia e Região Metropolitana', icon: 'bi bi-truck' },
  ];

  currentIndex = 0;
  carouselTransform = 'translateX(0%)';
  intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.promoItems.length;
      this.carouselTransform = `translateX(-${this.currentIndex * 100}%)`;
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}