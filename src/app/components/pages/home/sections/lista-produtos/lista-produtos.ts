import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Produto } from '../../../../../core/models/produto/produto';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../../../../core/services/scroll/scroll.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PixelLinkWhatsappService } from '../../../../../core/services/pixel/pixel-link-whatsapp/pixel-link-whatsapp.service';

interface ColchaoCatalogo {
  titulo: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.scss',
  imports: [RouterModule, CommonModule]
})
export class ListaProdutos implements OnChanges {
  @Input() produtos: Produto[] = [];
  @Input() categorias: string[] = [];
  @Input() categoriaFiltrada: string | null = null;
  @Output() categoriaSelecionada = new EventEmitter<string>();

  menuAberto = false;
  itensPorPagina = 8;
  paginaAtual = 1;
  categoriaAtual: string = '';
  private readonly whatsappNumero = '81998566535';
  private readonly whatsappNumeroDisplay = '(81) 99856-6535';
  private readonly whatsappBaseUrl = `https://wa.me/${this.whatsappNumero}?text=`;

  colchoesCatalogo: ColchaoCatalogo[] = [
    {
      titulo: 'Colchão Serenity Cloud',
      descricao: 'Espuma viscoelástica de alta densidade com suporte híbrido para noites mais frescas e confortáveis.',
      imagem: 'assets/images/catalogo/1.png'
    },
    {
      titulo: 'Colchão Ortopédico Atlas',
      descricao: 'Estrutura firme com camadas anatômicas que alinham a coluna e aliviam pontos de pressão.',
      imagem: 'assets/images/catalogo/2.jpg'
    },
    {
      titulo: 'Colchão DreamSoft Duo',
      descricao: 'Dupla face com tecnologia antialérgica para quem busca maciez e ventilação equilibrada.',
      imagem: 'assets/images/catalogo/3.png'
    },
    {
      titulo: 'Colchão Balance Max',
      descricao: 'Molas ensacadas individualmente que reduzem a transferência de movimento durante o sono.',
      imagem: 'assets/images/catalogo/4.jpg'
    },
    {
      titulo: 'Colchão SpaTherapy',
      descricao: 'Espuma gel refrescante combinada com fibras naturais que mantêm a temperatura regulada.',
      imagem: 'assets/images/catalogo/5.jpg'
    },
    {
      titulo: 'Colchão Essential Latex',
      descricao: 'Látex natural com zonas de suporte progressivo e acabamento hipoalergênico.',
      imagem: 'assets/images/catalogo/6.png'
    },
    {
      titulo: 'Colchão Infinity Plush',
      descricao: 'Camadas sobrepostas de espuma perfilada que abraçam o corpo e trazem sensação de leveza.',
      imagem: 'assets/images/catalogo/7.png'
    },
    {
      titulo: 'Colchão Fresh Air Premium',
      descricao: 'Sistema de circulação de ar 360° e tecido com toque gelado para noites sem calor.',
      imagem: 'assets/images/catalogo/8.png'
    },
    {
      titulo: 'Colchão Royal Support',
      descricao: 'Base reforçada com pillow top europeu que oferece suporte robusto com conforto extra.',
      imagem: 'assets/images/catalogo/9.png'
    }
  ];

  obterLinkWhatsapp(colchao?: string): string {
    const mensagemBase = colchao
      ? `Olá, estou interessado no colchão ${colchao} e gostaria de receber mais informações.`
      : 'Olá, quero descobrir qual o colchão ideal para mim.';
    const mensagem = encodeURIComponent(mensagemBase);
    return `${this.whatsappBaseUrl}${mensagem}`;
  }

  ngOnChanges() {
    this.categoriaAtual = this.categoriaFiltrada || '';
    this.paginaAtual = 1;
  }

  constructor(
    private scroll: ScrollService,
    private snackBar: MatSnackBar,
    private pixel: PixelLinkWhatsappService
  ) { }

  go(url: string, event: Event) {
    event.preventDefault();
    const id = url.replace(/^#/, '');
    this.scroll.scrollTo(id);
  }

  get produtosFiltrados(): Produto[] {
    return this.produtos.filter(p => {
      if (!this.categoriaAtual) return true;
      if (Array.isArray(p.categoria)) {
        return p.categoria.includes(this.categoriaAtual);
      }
      return p.categoria === this.categoriaAtual;
    });
  }

  get totalPaginas(): number {
    return Math.ceil(this.produtosFiltrados.length / this.itensPorPagina);
  }

  get produtosPaginados(): Produto[] {
    const start = (this.paginaAtual - 1) * this.itensPorPagina;
    return this.produtosFiltrados.slice(start, start + this.itensPorPagina);
  }

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  selecionarCategoria(categoria: string) {
    this.categoriaAtual = categoria;
    this.paginaAtual = 1;
    this.menuAberto = false;
    this.categoriaSelecionada.emit(categoria);
  }

  limparFiltro() {
    this.categoriaAtual = '';
    this.paginaAtual = 1;
    this.menuAberto = false;
    this.categoriaSelecionada.emit('');
  }

  mudarPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaAtual = pagina;
    }
  }

  get paginasExibidas(): number[] {
    const total = this.totalPaginas;
    const atual = this.paginaAtual;
    let start = Math.max(1, atual - 2);
    let end = Math.min(total, atual + 2);

    if (end - start < 4) {
      if (start === 1) {
        end = Math.min(total, start + 4);
      } else if (end === total) {
        start = Math.max(1, end - 4);
      }
    }

    const paginas: number[] = [];
    for (let i = start; i <= end; i++) {
      paginas.push(i);
    }
    return paginas;
  }

  clicarWhatsapp(event: Event, colchao?: string) {
    event.preventDefault();
    const link = this.obterLinkWhatsapp(colchao);

    this.pixel.trackWhatsappClick('catalogo', {
      telefone: this.whatsappNumeroDisplay,
      link,
      produto: colchao || 'Consulta catálogo'
    });

    this.snackBar.open(
      'Este site utiliza cookies para melhorar sua experiência e personalizar anúncios. Ao clicar no WhatsApp, você concorda com o uso de cookies.',
      '',
      { duration: 1000, horizontalPosition: 'center', verticalPosition: 'bottom' }
    );

    window.open(link, '_blank');
  }
}