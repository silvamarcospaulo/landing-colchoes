import { Component, Input } from '@angular/core';
import { Produto } from '../../../../../../core/models/produto/produto';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.scss'
})
export class CardProduto {
  @Input() produto!: Produto;
}
