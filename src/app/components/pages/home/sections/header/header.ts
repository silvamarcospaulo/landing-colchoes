import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScrollService } from '../../../../../core/services/scroll/scroll.service';
import { Link } from '../../../../../core/models/link/link';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  @Input() categorias: string[] = [];
  @Output() categoriaSelecionada = new EventEmitter<string>();
  @Output() scrollParaProdutos = new EventEmitter<void>();

  @Input() linksHeader!: Link[];

  constructor(private scroll: ScrollService) { }

  go(url: string, event: Event) {
    event.preventDefault();
    const id = url.replace(/^#/, '');
    this.scroll.scrollTo(id);
  }

  menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  selecionarCategoria(categoria: string) {
    this.menuAberto = false;
    this.categoriaSelecionada.emit(categoria);
    this.scrollParaProdutos.emit();
  }
}