import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItem } from '../../../../../core/models/carouselItem/carousel-item';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrossel.html',
  styleUrl: './carrossel.scss'
})
export class Carrossel {
  @Input() imagensCarrossel: CarouselItem[] = [];
  activeIndex = 0;

  proximo() {
    this.activeIndex = (this.activeIndex + 1) % this.imagensCarrossel.length;
  }

  anterior() {
    this.activeIndex = (this.activeIndex - 1 + this.imagensCarrossel.length) % this.imagensCarrossel.length;
  }

  irParaSlide(index: number) {
    this.activeIndex = index;
  }
}