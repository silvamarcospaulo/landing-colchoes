import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-detalhes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header-detalhes.html',
  styleUrls: ['./header-detalhes.scss']
})
export class HeaderDetalhes {
  @Input() categorias: string[] = [];
  @Output() categoriaSelecionada = new EventEmitter<string>();
  menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  selecionarCategoria(categoria: string) {
    this.menuAberto = false;
    this.categoriaSelecionada.emit(categoria);
  }
}