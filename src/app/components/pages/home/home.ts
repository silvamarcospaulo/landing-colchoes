import { Component, ViewChild, ElementRef } from '@angular/core';
import { Header } from "./sections/header/header";
import { Footer } from "../../reutilizaveis/footer/footer";
import { InformacoesInicio } from "./sections/informacoes-inicio/informacoes-inicio";
import { Link } from '../../../core/models/link/link';
import { CarouselItem } from '../../../core/models/carouselItem/carousel-item';
import { Produto } from '../../../core/models/produto/produto';
import { Inicio } from "./sections/inicio/inicio";
import { SobreNos } from "./sections/sobre-nos/sobre-nos";
import { BotaoWhatsApp } from "../../reutilizaveis/botao-whats-app/botao-whats-app";
import { Beneficios } from "./sections/beneficios/beneficios";
import { Depoimentos } from "./sections/depoimentos/depoimentos";
import { QualEscolher } from "./sections/qual-escolher/qual-escolher";

@Component({
  selector: 'app-home',
  imports: [Header, Footer, InformacoesInicio, Inicio, SobreNos, BotaoWhatsApp, Beneficios, Depoimentos, QualEscolher],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class Home {
  @ViewChild('secaoProdutos') secaoProdutos!: ElementRef;

  linksFooter: Link[] = [
    { label: 'Home', url: '#carousel-inicio' },
    { label: 'Seja um revendedor autorizado', url: '#video-seo' },
    { label: 'Catálogo', url: '#lista-produtos' },
    { label: 'Conheça nossa loja', url: '#video-phiz-chat' },
    { label: 'Sobre nós', url: '#sobre-nos' },
  ];

  imagensCarrossel: CarouselItem[] = [
    { src: 'assets/images/carrossel/salaarborizada.jpg', alt: 'Slide 1' },
    { src: 'assets/images/carrossel/salabranca.jpg', alt: 'Slide 2' },
    { src: 'assets/images/carrossel/salaverde.jpg', alt: 'Slide 3' },
    { src: 'assets/images/carrossel/cafeteira.jpg', alt: 'Slide 4' },
    { src: 'assets/images/carrossel/cozinha.jpg', alt: 'Slide 5' },
    { src: 'assets/images/carrossel/sala-de-estar.jpg', alt: 'Slide 6' }
  ];

  categorias: string[] = [
    "Acessórios", "Acoplados", "Adega", "Aparador", "Balcão", "Bancada",
    "Base", "Bicicleta", "Buffet", "Cadeira", "Cama", "Climatizador",
    "Colchão", "Cozinha", "Cômoda", "Eletrodomésticos", "Eletrônicos",
    "Escrivaninha", "Espelho", "Estante", "Estofado", "Ferramentas",
    "Fogão", "Fruteira", "Infantil", "Lavadora", "Mesa", "Modulados",
    "Ombrelone", "Painel", "Penteadeira", "Rack", "Roupeiros", "Sapateiras", "TV", "Ventilador"
  ];

  produtos: Produto[] =
    [
      {
        "id": 183454,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA DETROIT NEW - JEQUITIBA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855832680fa55860f4c.webp"
      },
      {
        "id": 183462,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COMODA ARAMOVEIS 1 P 5G - ATACAMA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855833680fa559afae9.webp"
      },

      {
        "id": 181884,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO 2 PORTAS - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855877680fa58544ad4.webp"
      },
      {
        "id": 184404,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "HOME SUSPENSO AVANT 1.4 C/ NICHO - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434307680936c37bdd3.webp"
      },
      {
        "id": 204399,
        "categoria": [
          "TV"
        ],
        "nomeDoProduto": "SMART TV TRONOS ''55'' POLEGADAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-21/1747865562682e4fda774b6.webp"
      },
      {
        "id": 206134,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE ESCRITÓRIO 3 GAVETAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516391746867e4860538b.webp"
      },
      {
        "id": 183621,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA ESTOFADA ALBERTO VELUDO 406 - COR 07 CX C/ 2 - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843869680f769d79509.webp"
      },
      {
        "id": 183723,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BASE PARA CAMA CASAL SCALIBUR - 1.38 X 1.88",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843879680f76a777658.webp"
      },
      {
        "id": 182502,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW ARAMOVEIS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855713680fa4e18d34c.webp"
      },
      {
        "id": 184021,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TURIM C/ 2 PORTAS DE CORRER - CANELATO 3D",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453318416807a681955bf.webp"
      },
      {
        "id": 184022,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TURIM C/ 2 PORTAS DE CORRER - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-27/1745783492680e8ac46e174.webp"
      },
      {
        "id": 184029,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TOLEDO 6 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453349286807b290aba07.webp"
      },
      {
        "id": 184031,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TOKIO 6 PTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454250036809126b9e997.webp"
      },
      {
        "id": 184034,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855862680fa57678a57.webp"
      },
      {
        "id": 184035,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855760680fa5105bc0d.webp"
      },
      {
        "id": 184036,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 3 PTS PLUS - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745507529680a54c9e10af.webp"
      },
      {
        "id": 184037,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 3 PTS PLUS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453350226807b2eebbb0b.webp"
      },
      {
        "id": 184038,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 3 PORTAS PREMIUM - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453350416807b3017fa65.webp"
      },
      {
        "id": 184039,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 3 PORTAS PREMIUM - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453350846807b32c62981.webp"
      },
      {
        "id": 184041,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO PAULO 6 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855865680fa5792ac27.webp"
      },
      {
        "id": 184042,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 6 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453496576807ec19df6d7.webp"
      },
      {
        "id": 184043,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 6 PORTAS - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453500976807edd1782b3.webp"
      },
      {
        "id": 184046,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO 2 PORTAS PLUS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454252776809137d79421.webp"
      },
      {
        "id": 184047,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO 2 PORTAS PLUS - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453351406807b364b77a1.webp"
      },
      {
        "id": 184048,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO 2 PORTAS PLUS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453351556807b37381749.webp"
      },
      {
        "id": 184055,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. RUBI 8 P. 4 GAV. C/ ESP. - CINAMOMO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453353836807b457c7f2c.webp"
      },
      {
        "id": 184056,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO RUBI 8 P. 4 GAV. C/ ESPELHO - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453353996807b46735e25.webp"
      },
      {
        "id": 184057,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO RUBI 8 PORTAS 4 GAV. C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453354176807b479ae851.webp"
      },
      {
        "id": 184058,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO REIS 6 PTS FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453355206807b4e0532c4.webp"
      },
      {
        "id": 184059,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO REIS 6 PTS BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453355676807b50f8b38d.webp"
      },
      {
        "id": 184064,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. PORTUGAL 6 PTS PRIME - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454290676809224b0ada3.webp"
      },
      {
        "id": 184065,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. PORTUGAL 6 PTS PRIME - CINAM. / OFF / CINAM.",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453356876807b5878c663.webp"
      },
      {
        "id": 184066,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO PORTUGAL 6 PTS PRIME - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453364806807b8a010a48.webp"
      },
      {
        "id": 184067,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO PORTUGAL 6 PTS PRIME - CACAU",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453364806807b8a010a48.webp"
      },
      {
        "id": 184075,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO NEW VERONA 6 PORTAS - CINAMOMO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745509250680a5b82083c9.webp"
      },
      {
        "id": 184076,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO NEW VERONA 6 PORTAS - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745509264680a5b908c6de.webp"
      },
      {
        "id": 184078,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO NEW PARMA - IPE DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745509310680a5bbe2acf1.webp"
      },
      {
        "id": 184079,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO NEW PARMA - CINAMOMO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745509331680a5bd30d6a0.webp"
      },
      {
        "id": 184083,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MONTANA C\\ 2 PORTAS DE CORRER - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453368106807b9ead6f36.webp"
      },
      {
        "id": 184084,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MONACO 10 PORTAS - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453368836807ba33870a0.webp"
      },
      {
        "id": 184085,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MONACO 10 PORTAS - AREIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453368996807ba430cf71.webp"
      },
      {
        "id": 184086,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MALIBU NEW 6 PTS - JEQUITIBA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453369456807ba7125b65.webp"
      },
      {
        "id": 184087,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MALIBU NEW 6 PTS - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453369756807ba8f1605e.webp"
      },
      {
        "id": 184088,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MALIBU NEW 6 PTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453369976807baa598177.webp"
      },
      {
        "id": 184091,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO LOTSE - DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453370766807baf4d9abc.webp"
      },
      {
        "id": 184092,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO LOTSE - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453371736807bb55eb295.webp"
      },
      {
        "id": 184104,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 6PTS C/ESP.  BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-25/1745609270680be236a9799.webp"
      },
      {
        "id": 184105,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 6PTS C/ ESP. FREIJO-OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453373926807bc307b9d8.webp"
      },
      {
        "id": 184106,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 6PTS C/ ESP.  DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453374046807bc3c71c9d.webp"
      },
      {
        "id": 184107,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 6PTS C/ ESP.  CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453374706807bc7e7b4dd.webp"
      },
      {
        "id": 184116,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GOLD 3 PORTAS - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453381236807bf0bcc07a.webp"
      },
      {
        "id": 184117,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GOIANIA 6 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453382736807bfa1dcb85.webp"
      },
      {
        "id": 184118,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GOIANIA 6 PORTAS - CANELATO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453382856807bfad9bf7b.webp"
      },
      {
        "id": 184119,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO GENESIS PRETO C/ ESPELHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453383506807bfee56f24.webp"
      },
      {
        "id": 184120,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO GENESIS CINAMOMO - OFF WHITE C/ ESPELHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453480686807e5e4d250b.webp"
      },
      {
        "id": 184121,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO GENESIS BRANCO C/ ESPELHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453480686807e5e4d250b.webp"
      },
      {
        "id": 184122,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO GENESIS  CINAMOMO C/ ESPELHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453480686807e5e4d250b.webp"
      },
      {
        "id": 184123,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PTS - CANELATO 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453482216807e67d1d420.webp"
      },
      {
        "id": 184124,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PTS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453482386807e68e72334.webp"
      },
      {
        "id": 184125,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453482556807e69f74ea8.webp"
      },
      {
        "id": 184126,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PTS - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453482826807e6ba69add.webp"
      },
      {
        "id": 184127,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PTS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453483136807e6d911a30.webp"
      },
      {
        "id": 184128,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PTS - CANELATO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453483386807e6f215617.webp"
      },
      {
        "id": 184129,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453483786807e71ada01d.webp"
      },
      {
        "id": 184130,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PTS - ACACIA REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453484086807e738202e6.webp"
      },
      {
        "id": 184131,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PTS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453484206807e744363c9.webp"
      },
      {
        "id": 184132,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PTS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453484536807e7653e282.webp"
      },
      {
        "id": 184133,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PTS - ACACIA MAD./ REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752088207686ebe8f2faa7.webp"
      },
      {
        "id": 184134,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453484826807e7822fb81.webp"
      },
      {
        "id": 184135,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PTS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453484986807e79242d75.webp"
      },
      {
        "id": 184136,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FIORELA 100% MDF- JACARANDÁ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453485216807e7a94db09.webp"
      },
      {
        "id": 184141,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ESPANHA PREMIUM -BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-25/1745612007680bece75b254.webp"
      },
      {
        "id": 184142,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ESPANHA PREMIUM - DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453486366807e81cab1db.webp"
      },
      {
        "id": 184143,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. ESPANHA PLUS C/ ESP. - DEMOLIÇÃO / DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453486926807e854c3f47.webp"
      },
      {
        "id": 184144,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO ESPANHA  C/ ESPELHO - DEMOLIÇÃO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453490366807e9ac234a5.webp"
      },
      {
        "id": 184145,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUP. ESPANHA PLUS C/ ESPELHO - CINAMOMO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453492446807ea7cd47a7.webp"
      },
      {
        "id": 184146,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO ESPANHA PLUS C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453492706807ea96d833c.webp"
      },
      {
        "id": 184153,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO DALLAS 6 P. C/ 6 GAV. - CINAMOMO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453493676807eaf790dba.webp"
      },
      {
        "id": 184154,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO DALLAS 6 PORTAS C/ 6 GAV. - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429180680922bc00a0c.webp"
      },
      {
        "id": 184155,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO DALLAS 6 PORTAS C/ 6 GAV. - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453493816807eb05cd93a.webp"
      },
      {
        "id": 184161,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CATATAU NEW 3 PTS - BCO/RS/NAT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429209680922d9efc44.webp"
      },
      {
        "id": 184162,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CAPELINHA - CANELATO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429255680923074b614.webp"
      },
      {
        "id": 184166,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CANCUN 6 PORTAS - AMARULA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453495646807ebbc5a1b2.webp"
      },
      {
        "id": 184177,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO BARCELONA/CLARICE PLUS C/ ESPELHO - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453338586807ae62ef87c.webp"
      },
      {
        "id": 184178,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO BARCELONA/CLARICE PLUS C/ ESP - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453338716807ae6f53c26.webp"
      },
      {
        "id": 184179,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. BARCELONA/CLARICE PLUS C/ ESP. - FREIJO / BR",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453498696807eced54dd6.webp"
      },
      {
        "id": 184180,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO BARCELONA/CLARICE PLUS C/ ESP. - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453338886807ae80b3787.webp"
      },
      {
        "id": 184181,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUP. BARCELONA/CLARICE PLUS C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453500446807ed9cba9e4.webp"
      },
      {
        "id": 184182,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO BAHIA 3 PTS PLUS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453500846807edc49ff82.webp"
      },
      {
        "id": 184187,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARIZONA 3 PORTAS DE CORRER - IPE VANILLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453502176807ee49c1584.webp"
      },
      {
        "id": 184188,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO ARIES C/ ESPELHO E PÉS - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453503406807eec422653.webp"
      },
      {
        "id": 184189,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO ARIES C/ ESPELHO E PÉS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453504416807ef29f35bb.webp"
      },
      {
        "id": 184190,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARAMOVEIS 7 PTS GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453504716807ef47166eb.webp"
      },
      {
        "id": 184192,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ANTARES 6 PORT PRIME - CINAM / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453511746807f20682d9e.webp"
      },
      {
        "id": 184193,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ANTARES 6 PORTAS PRIME - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-22/17453511746807f20682d9e.webp"
      },
      {
        "id": 184194,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. ANJOS C/ 9 GAV. E ESP. - DEMOLIÇÃO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453513256807f29dbb674.webp"
      },
      {
        "id": 184195,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO ANJOS C/ 9 GAVETAS E ESPELHO - DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453513856807f2d9f2df6.webp"
      },
      {
        "id": 184196,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. ANJOS C/ 9 GAV. E ESP. - CINAMOMO/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453514256807f301eac1d.webp"
      },
      {
        "id": 184197,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO ANJOS C/ 9 GAVETAS E ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453514616807f3258611e.webp"
      },
      {
        "id": 184201,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5142 GOLD 4P 2G - EBANO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429439680923bf13d33.webp"
      },
      {
        "id": 184202,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5142 GOLD 4P 2G - ATACAMA/OFF  WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453516896807f40915839.webp"
      },
      {
        "id": 184203,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5142 GOLD 4P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453517026807f416d0290.webp"
      },
      {
        "id": 184204,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5142 GOLD 4P 2G - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453517456807f441255ce.webp"
      },
      {
        "id": 184205,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5138 GOLD 6P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453517626807f452292c5.webp"
      },
      {
        "id": 184206,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5138 GOLD 6P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453517876807f46b47306.webp"
      },
      {
        "id": 184207,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5138 GOLD 6P 2G - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453518306807f496952dc.webp"
      },
      {
        "id": 184208,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5132 GOLD 3P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453518706807f4bedc405.webp"
      },
      {
        "id": 184209,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5132 GOLD 3P 2G - ATACAMA/ OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453518936807f4d5f1d66.webp"
      },
      {
        "id": 184210,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 5132 GOLD 3P 2G - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453519626807f51aa65f4.webp"
      },
      {
        "id": 184211,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "ROUPE 0240 ALTO 4P 2G INTERNAS - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453519816807f52d82071.webp"
      },
      {
        "id": 184212,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 0240 ALTO 4P 2G INTERNAS - ATACAMA/AREIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453519946807f53a99bde.webp"
      },
      {
        "id": 184213,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 6020 6P 2G INTERNAS - EBANO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429486680923ee032aa.webp"
      },
      {
        "id": 184214,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 0230 6P 2G INTERNAS - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453521356807f5c7ac50a.webp"
      },
      {
        "id": 184215,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 0230 6P 2G INTERNAS - ATACAMA/AREIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453521516807f5d7cdeb3.webp"
      },
      {
        "id": 184216,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 0230 6P 2G INTERNAS - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453521806807f5f480dac.webp"
      },
      {
        "id": 184219,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK VINCI - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453522266807f62258413.webp"
      },
      {
        "id": 184220,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK VINCI - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453522516807f63b12303.webp"
      },
      {
        "id": 184221,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK VINCI - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453522646807f64814bf1.webp"
      },
      {
        "id": 184222,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK TITAN - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453523736807f6b5a6f06.webp"
      },
      {
        "id": 184223,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK TITAN - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453523966807f6cc311fe.webp"
      },
      {
        "id": 184224,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK TITAN - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453524146807f6de0ba30.webp"
      },
      {
        "id": 184225,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK STAR PRETO/CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453524526807f70456527.webp"
      },
      {
        "id": 184226,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK STAR OFF WHITE/CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453524706807f7168da00.webp"
      },
      {
        "id": 184227,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK LIVERPOOL - OFF WHITE",
        "imagem": ""
      },
      {
        "id": 184228,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK LEGACY 2.0 MTS - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453525126807f74080024.webp"
      },
      {
        "id": 184229,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK LEGACY 2.0 MTS - CEDRO / PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453525406807f75c91cf2.webp"
      },
      {
        "id": 184230,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK KING - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453526396807f7bf5c6a7.webp"
      },
      {
        "id": 184231,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK KING - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453526546807f7ceb2c1b.webp"
      },
      {
        "id": 184234,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK DARIN - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453527196807f80fea5eb.webp"
      },
      {
        "id": 184235,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK DARIN - FENDI",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453527486807f82c7998c.webp"
      },
      {
        "id": 184236,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK DARIN - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453527726807f8440eaba.webp"
      },
      {
        "id": 184237,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK CAYMAN - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453527896807f855c064f.webp"
      },
      {
        "id": 184238,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK CAYMAN - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453528076807f8677fa3f.webp"
      },
      {
        "id": 184239,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK C/ PAINEL LEGACY - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453528356807f88395e31.webp"
      },
      {
        "id": 184242,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK ARUBA - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453529316807f8e3489bb.webp"
      },
      {
        "id": 184243,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK ARUBA - NOGUEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453529926807f920a1859.webp"
      },
      {
        "id": 184244,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK ARUBA - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453532386807fa1636700.webp"
      },
      {
        "id": 184245,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK ANDROS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453532746807fa3a3a36d.webp"
      },
      {
        "id": 184246,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK ANDROS - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453532856807fa45516d6.webp"
      },
      {
        "id": 184248,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "PORTA COPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453533376807fa7909e45.webp"
      },
      {
        "id": 184249,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "POLTRONA VINTAGE C/ TECIDO EM LINHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453534136807fac5d9a2c.webp"
      },
      {
        "id": 184250,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "POLTRONA SAMOA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453534416807fae13a890.webp"
      },
      {
        "id": 184251,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "POLTRONA OPALA C/ PÉS RETRÔ - CORES VARIADAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453534986807fb1a89142.webp"
      },
      {
        "id": 184252,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "POLTRONA ADULTA C/ PÉS RETRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453535366807fb40b3d55.webp"
      },
      {
        "id": 184264,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL MASTER 1.80 RIPADO - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453538956807fca7ca9bd.webp"
      },
      {
        "id": 184265,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL MASTER 1.8 / - FENDI",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/1747224028682485dcf056a.webp"
      },
      {
        "id": 184268,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453544936807fefd749e6.webp"
      },
      {
        "id": 184269,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453545116807ff0f8e33d.webp"
      },
      {
        "id": 184270,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - NOGAL / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453561476808057390216.webp"
      },
      {
        "id": 184271,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - CEDRO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453561586808057eec0b3.webp"
      },
      {
        "id": 184272,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356214680805b682ee6.webp"
      },
      {
        "id": 184273,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356226680805c23d039.webp"
      },
      {
        "id": 184274,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL DUNAS - OFF WHITE + NATURALE",
        "imagem": ""
      },
      {
        "id": 184281,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL AVANT 1.80 - NOGUEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/174535629468080606035c6.webp"
      },
      {
        "id": 184282,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL AVANT 1.80 - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/174535633668080630a8749.webp"
      },
      {
        "id": 184283,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL AVANT 1.35 - NOGUEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/174535635668080644837c9.webp"
      },
      {
        "id": 184284,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL AVANT 1.35 - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356408680806783088b.webp"
      },
      {
        "id": 184285,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL ARBO RIPADO C/ NICHO - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356498680806d206440.webp"
      },
      {
        "id": 184286,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL ARBO RIPADO C/ NICHO - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453565746808071e77a02.webp"
      },
      {
        "id": 184287,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL ( DAVOS / DIJON ) - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453566516808076be7a64.webp"
      },
      {
        "id": 184288,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL ( DAVOS / DIJON ) - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453566666808077aba9bd.webp"
      },
      {
        "id": 184289,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "NICHO DIOR 1.60 OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/174535669368080795778ac.webp"
      },
      {
        "id": 184295,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO PREMIUM C/ ESP. FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356742680807c607fd5.webp"
      },
      {
        "id": 184296,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO PREMIUM C/ ESP. BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356763680807db510ca.webp"
      },
      {
        "id": 184297,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356777680807e991dd4.webp"
      },
      {
        "id": 184298,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453568106808080a53998.webp"
      },
      {
        "id": 184299,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/174535683868080826eb5cc.webp"
      },
      {
        "id": 184300,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745356867680808433b29a.webp"
      },
      {
        "id": 184306,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/17453569426808088eaf91f.webp"
      },
      {
        "id": 184307,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - ACACIA MADEIRADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752088245686ebeb5e0cb0.webp"
      },
      {
        "id": 184308,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - ACACIA / REFLECTA BRILHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752088257686ebec16f141.webp"
      },
      {
        "id": 184309,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO ALTO 4P - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-22/1745357013680808d5196ed.webp"
      },
      {
        "id": 184310,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO ALTO 4P - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454187926808fa282c621.webp"
      },
      {
        "id": 184313,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO 1.83 MTS - EBANO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454190116808fb03b658c.webp"
      },
      {
        "id": 184314,
        "categoria": [
          "Modulados"
        ],
        "nomeDoProduto": "MODULADO 5 PORTAS - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454190436808fb232195d.webp"
      },
      {
        "id": 184321,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA PETRA 1.20 X 0.80 EM MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454252056809133558c74.webp"
      },
      {
        "id": 184322,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA PETRA 1.03 X 1.03 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745425355680913cb170bb.webp"
      },
      {
        "id": 184323,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA PETRA 0.90 X 0.90 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745425355680913cb170bb.webp"
      },
      {
        "id": 184327,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA HERA 1.60 X 0.90 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745425886680915dec0784.webp"
      },
      {
        "id": 184328,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA HERA 1.20 X 0.80 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745425886680915dec0784.webp"
      },
      {
        "id": 184329,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DUBAI 1.60 X 0.80 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174542834968091f7d67956.webp"
      },
      {
        "id": 184330,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DUBAI 1.20 X 0.80 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174542834968091f7d67956.webp"
      },
      {
        "id": 184332,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CENTRO HOLAMBRA - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454285406809203c582e6.webp"
      },
      {
        "id": 184333,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CENTRO HOLAMBRA - FENDI",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745428561680920518c91a.webp"
      },
      {
        "id": 184334,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CENTRO CDK",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745428655680920af29276.webp"
      },
      {
        "id": 184335,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA VILLARE - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543107068092a1e126f7.webp"
      },
      {
        "id": 184336,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA VILLARE - PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543108668092a2e04cb8.webp"
      },
      {
        "id": 184341,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA URBAN - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174542909268092264ab213.webp"
      },
      {
        "id": 184342,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA URBAN - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174542910468092270ac84d.webp"
      },
      {
        "id": 184343,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA CITY - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429239680922f737879.webp"
      },
      {
        "id": 184344,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA CITY - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174542983068092546f21ec.webp"
      },
      {
        "id": 184348,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA COM 3 PRATELEIRAS EM AÇO - FREIJO / PRETO FOSCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429972680925d44e2ef.webp"
      },
      {
        "id": 184349,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA COM 2 BANCOS - FREIJO / PRETO FOSCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429988680925e491e9d.webp"
      },
      {
        "id": 184350,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA BELA 0.90 X 0.90 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430049680926211dc61.webp"
      },
      {
        "id": 184356,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 20.5 KG - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454301136809266110a91.webp"
      },
      {
        "id": 184357,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 20.5 KG - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454301136809266110a91.webp"
      },
      {
        "id": 184358,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 14 KG - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430188680926ac60ae2.webp"
      },
      {
        "id": 184359,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 14 KG - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430188680926ac60ae2.webp"
      },
      {
        "id": 184360,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 10KG 220 V - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430501680927e59d310.webp"
      },
      {
        "id": 184365,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "LAMINA RIPADA ARBO 0.94 MTS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543059468092842380ac.webp"
      },
      {
        "id": 184366,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "LAMINA RIPADA ARBO 0.94 MTS - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543059468092842380ac.webp"
      },
      {
        "id": 184367,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PAQUETA 910 PLUS - LM / RIPADO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543117068092a82f06ba.webp"
      },
      {
        "id": 184368,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PAQUETA 910 - LM MEL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543121368092aadcfa2e.webp"
      },
      {
        "id": 184369,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PAQUETA 910 - GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543126168092adde6cda.webp"
      },
      {
        "id": 184370,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PAQUETA 1210 - RIPADO BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745430885680929652ab29.webp"
      },
      {
        "id": 184371,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PAQUETÁ 1210 - LM  MEL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430976680929c03c4ac.webp"
      },
      {
        "id": 184372,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PAQUETA 1210 - GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543104468092a048972c.webp"
      },
      {
        "id": 184378,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GOLF REFLECTA 5P 2G - RIPADO /ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543187968092d47db65e.webp"
      },
      {
        "id": 184379,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GOLF REFLECTA 5P 2G - LM/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543189768092d5990ded.webp"
      },
      {
        "id": 184380,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GOLF REFLECTA 5P 2G - ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543227168092ecfcfb01.webp"
      },
      {
        "id": 184381,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GOLF REFLECTA - CINZA SUPREMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543210868092e2c7aede.webp"
      },
      {
        "id": 184383,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT CEARA 5 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472318716824a47febc32.webp"
      },
      {
        "id": 184384,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT CEARA 5 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432617680930295341e.webp"
      },
      {
        "id": 184385,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT CEARA 5 PORTAS - ACACIA MADEIRADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745432791680930d7e7a65.webp"
      },
      {
        "id": 184386,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT CEARA 4 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432816680930f0da41e.webp"
      },
      {
        "id": 184387,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT CEARA 4 PORTAS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432827680930fb6dc0c.webp"
      },
      {
        "id": 184388,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT C/ 8 PES - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745432999680931a77b369.webp"
      },
      {
        "id": 184389,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT C/ 8 PES - IMBUIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433081680931f978a90.webp"
      },
      {
        "id": 184390,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT C/ 8 PES - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454331516809323f64437.webp"
      },
      {
        "id": 184395,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "JOGO DE MESA CROMO C/ 4 CAD. BR SEM TAMPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/174614297868140702097ee.webp"
      },
      {
        "id": 184397,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO MAXI - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432805680930e5cca51.webp"
      },
      {
        "id": 184398,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO MAXI - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432823680930f73ea99.webp"
      },
      {
        "id": 184399,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO MAXI - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454333566809330c5ba53.webp"
      },
      {
        "id": 184400,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO MAXI - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433305680932d978584.webp"
      },
      {
        "id": 184401,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "HOME SUSPENSO AVANT 1.8 C/ NICHO - NOGUEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454336586809343ac5b10.webp"
      },
      {
        "id": 184402,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "HOME SUSPENSO AVANT 1.8 C/ NICHO - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454341986809365673ed0.webp"
      },
      {
        "id": 184403,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "HOME SUSPENSO AVANT 1.4 C/ NICHO - NOGUEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454336586809343ac5b10.webp"
      },
      {
        "id": 184404,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "HOME SUSPENSO AVANT 1.4 C/ NICHO - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434307680936c37bdd3.webp"
      },
      {
        "id": 184406,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "HOME IPANEMA - NATURE / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/174614379168140a2fc023b.webp"
      },
      {
        "id": 184408,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA REGIA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433382680933266a759.webp"
      },
      {
        "id": 184409,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA MARTA - MONTANA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433555680933d32abdb.webp"
      },
      {
        "id": 184410,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA MARTA - LM / LM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433520680933b0f176e.webp"
      },
      {
        "id": 184411,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA MARTA - LM / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745433575680933e72a525.webp"
      },
      {
        "id": 184412,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA MARTA - CARVALHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745433555680933d32abdb.webp"
      },
      {
        "id": 184413,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA MARTA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454336136809340d2fc01.webp"
      },
      {
        "id": 184415,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA DALLAS - LM / LM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454341416809361d3dc61.webp"
      },
      {
        "id": 184416,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA DALLAS - LM / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745434183680936470f5ba.webp"
      },
      {
        "id": 184417,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA DALLAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454342396809367fcb470.webp"
      },
      {
        "id": 184418,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA DALLAS - BCO / CARVALHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454342706809369e1acae.webp"
      },
      {
        "id": 184421,
        "categoria": [
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO MONACO TOP GLASS 5 BOCAS PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434291680936b3c4d7d.webp"
      },
      {
        "id": 184422,
        "categoria": [
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO MONACO TOP GLASS 5 BOCAS BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434304680936c05d5c1.webp"
      },
      {
        "id": 184423,
        "categoria": [
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO MONACO TOP GLASS 4 BOCAS PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434318680936ce17a2a.webp"
      },
      {
        "id": 184424,
        "categoria": [
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO MONACO TOP GLASS 4 BOCAS BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434330680936dabffe7.webp"
      },
      {
        "id": 184425,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO GAS 5Q MONACO PLUS PTO 20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434350680936eee65b8.webp"
      },
      {
        "id": 184426,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO GAS 5Q MONACO PLUS BCO 20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434361680936f992dcb.webp"
      },
      {
        "id": 184427,
        "categoria": [
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO GAS 5BC MONACO TOP GLASS BCO 12",
        "imagem": "https://phizclip-assets.phiz.live/phizshop/pro/Store/Goods/2025-04-23/17454344096809372991bc2.gif"
      },
      {
        "id": 184428,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO GAS 4BC COLISEUM PRETO S A 12",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344296809373db7f08.webp"
      },
      {
        "id": 184429,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO GAS 4BC COLISEUM BCO S A 12",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344466809374e0e1f5.webp"
      },
      {
        "id": 184430,
        "categoria": [
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO COOKTOP GOLD 5 BOCAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344586809375ac8ac7.webp"
      },
      {
        "id": 184433,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO 4 BOCAS MONACO PLUS PTO 20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-20/1747744884682c7874ba4e6.webp"
      },
      {
        "id": 184434,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO 4 BOCAS MONACO PLUS BCO 20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344786809376ee14be.webp"
      },
      {
        "id": 184435,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.9 MTS C/ PORTA COPO - CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856105680fa6693a057.webp"
      },
      {
        "id": 184436,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.50 MTS - C/ PORTA COPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-27/1745780722680e7ff2cb766.webp"
      },
      {
        "id": 184437,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.5 MTS C/ PORTA COPO",
        "imagem": ""
      },
      {
        "id": 184438,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.1 MTS C/ PORTA COPO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856076680fa64cc4a67.webp"
      },
      {
        "id": 184445,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO RETRATIL RECLINAVEL 3080",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-05/174647218868190cfc2ce8b.webp"
      },
      {
        "id": 184456,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO MORF 2.90 MTS - AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-09/1746811721681e3b4960442.webp"
      },
      {
        "id": 184463,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO LIFE 2.0 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543535268093ad870f13.webp"
      },
      {
        "id": 184464,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO LAUS PRIME 2.90 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543545368093b3d438f5.webp"
      },
      {
        "id": 184465,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO LAUS PRIME 2.50 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543547768093b5589aab.webp"
      },
      {
        "id": 184466,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO LAUS PRIME 2.00 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543551168093b779f8e0.webp"
      },
      {
        "id": 184467,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO LARISSA DE CANTO - CORES VARIADAS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856095680fa65fc4127.webp"
      },
      {
        "id": 184474,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO BARCELONA  2 E 3 LUG.",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856097680fa66132bd5.webp"
      },
      {
        "id": 184475,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA 2.9 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543548668093b5ee7209.webp"
      },
      {
        "id": 184476,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA 2.5 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543549568093b6766ece.webp"
      },
      {
        "id": 184477,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA 2.0 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543550268093b6e8a0ef.webp"
      },
      {
        "id": 184478,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA  2.90 MTS C/ MOLAS ENSACADAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/1746213040681518b048929.webp"
      },
      {
        "id": 184479,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA  2.50 MTS C/ MOLAS ENSACADAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/1746213047681518b79c211.webp"
      },
      {
        "id": 184480,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE OFFICE - NATURE / PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543554568093b99eef3f.webp"
      },
      {
        "id": 184481,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE OFFICE - BRANCO / NATURE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543555468093ba2954c7.webp"
      },
      {
        "id": 184482,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE LIVREIRO LARISSA - ROSE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543556568093bad4d593.webp"
      },
      {
        "id": 184483,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE LIVREIRO LARISSA - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543575568093c6b6a204.webp"
      },
      {
        "id": 184484,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE LIVREIRO LARISSA - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543576568093c7561c69.webp"
      },
      {
        "id": 184485,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE DE AÇO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543578568093c8925b21.webp"
      },
      {
        "id": 184494,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA TAURUS 1.20 MTS - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543595768093d3526529.webp"
      },
      {
        "id": 184495,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA TAURUS 1.20 MTS - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543597168093d431dbc4.webp"
      },
      {
        "id": 184497,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA OFFICE - NATURE / PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543560468093bd481a5c.webp"
      },
      {
        "id": 184500,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA EM 'l' THOR - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543562968093bede69e5.webp"
      },
      {
        "id": 184501,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA EM L TAURUS - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543566468093c1037af2.webp"
      },
      {
        "id": 184502,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA EM L TAURUS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543571068093c3ef2a70.webp"
      },
      {
        "id": 184503,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA ARIEL - MEL / PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543575968093c6f01ec6.webp"
      },
      {
        "id": 184504,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA ARIEL - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543577568093c7fec967.webp"
      },
      {
        "id": 184505,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "ESCRIVANINHA ARIEL - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543578568093c8923732.webp"
      },
      {
        "id": 184507,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA VITORIA SOMENTE O \"L\" - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543138068092b547b17c.webp"
      },
      {
        "id": 184508,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA VITORIA SOMENTE O \"L\" - GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543164968092c61b734d.webp"
      },
      {
        "id": 184521,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA THALIA / AGATHA - LM / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745430757680928e5bc25f.webp"
      },
      {
        "id": 184522,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA THALIA / AGATHA - LM / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745430740680928d4bb45e.webp"
      },
      {
        "id": 184523,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA THALIA / AGATHA - ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543117568092a87c8c7f.webp"
      },
      {
        "id": 184524,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA SIENA 6P 1G - AVENA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745430444680927acbbc28.webp"
      },
      {
        "id": 184525,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA SIENA 6P 1G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745430344680927484ab90.webp"
      },
      {
        "id": 184527,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ROMA 4P 2G - AVENA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543027968092707c5c16.webp"
      },
      {
        "id": 184528,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ROMA 4P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745429946680925bae305a.webp"
      },
      {
        "id": 184529,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA RAVENA - MADEIRADO REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543170068092c9495c2f.webp"
      },
      {
        "id": 184530,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA RAVENA - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752088734686ec09e8c7d8.webp"
      },
      {
        "id": 184531,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA PREMIUM 1800 7P 2G- MONTANA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543233368092f0d515ad.webp"
      },
      {
        "id": 184532,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA PREMIUM 1800 7P 2G - MONTANA/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454326766809306442f82.webp"
      },
      {
        "id": 184533,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA PREMIUM 1800 7P 2G - MONTANA/ARENA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745432824680930f811d77.webp"
      },
      {
        "id": 184534,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MONACO - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745433062680931e67fbf0.webp"
      },
      {
        "id": 184535,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MONACO - CANELATO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745433077680931f59b1ac.webp"
      },
      {
        "id": 184538,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MILA 5P 3G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454331566809324411eb8.webp"
      },
      {
        "id": 184539,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MILA 5P 3G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543316868093250c5371.webp"
      },
      {
        "id": 184540,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MADRI 4 PEÇAS EM AÇO - TERRACOTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454334506809336a8b496.webp"
      },
      {
        "id": 184542,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MADRI 4 PEÇAS EM AÇO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454336456809342d187a8.webp"
      },
      {
        "id": 184543,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MADRI 4 PEÇAS EM AÇO - AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454337346809348632325.webp"
      },
      {
        "id": 184544,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA LANA C/ BALCÃO 6P 3G - MARROCOS/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434066680935d25bb29.webp"
      },
      {
        "id": 184545,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA JUMA C/ BALCÃO 7P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745434292680936b43c900.webp"
      },
      {
        "id": 184546,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA JUMA C/ BALCÃO 7P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434317680936cd31cb3.webp"
      },
      {
        "id": 184547,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ISIS 5P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344316809373f4b84c.webp"
      },
      {
        "id": 184548,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ISIS 5P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543445168093753f41dd.webp"
      },
      {
        "id": 184549,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ISABELLE C/ BALCÃO 6P 2G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454344926809377ca10a3.webp"
      },
      {
        "id": 184550,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ISABELLE C/ BALCÃO 6P 2G - ATAC./OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434531680937a379deb.webp"
      },
      {
        "id": 184551,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ISABELLE C/ BALCÃO 6P 1G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745434543680937af19082.webp"
      },
      {
        "id": 184552,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA FUTURA / IBIZA 2.13 - LM / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454346386809380e2564f.webp"
      },
      {
        "id": 184553,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA FUTURA / IBIZA 2.13 - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454347196809385fc60b2.webp"
      },
      {
        "id": 184554,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA FUTURA / IBIZA 2.13 - ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745434860680938ec2c0e8.webp"
      },
      {
        "id": 184555,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA FORTALEZA C/ BALCAO - CANELATO/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543521568093a4fc42a9.webp"
      },
      {
        "id": 184557,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA EMILY C/ BALCÃO 6P 1G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543575868093c6e7c998.webp"
      },
      {
        "id": 184559,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA CEARA 4P 1G - ACACIA MADEIRADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543598068093d4c9b9d6.webp"
      },
      {
        "id": 184562,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA CAROL 6P 1G - ATACAMA/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543607568093dabbd3f9.webp"
      },
      {
        "id": 184565,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ATENAS C/ BALCÃO 8P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543607468093daade95c.webp"
      },
      {
        "id": 184566,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ATENAS C/ BALCÃO 8P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543609068093dba4b840.webp"
      },
      {
        "id": 184567,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZ ANGELINA PRIME FRISADA - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543610068093dc41941b.webp"
      },
      {
        "id": 184568,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZ ANGELINA PRIME FRISADA - CINAMOMO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543610868093dcc25ede.webp"
      },
      {
        "id": 184569,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALINE - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543613268093de4827a8.webp"
      },
      {
        "id": 184570,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALANA EM AÇO 8P 1G - BRANCO/AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543616068093e0023135.webp"
      },
      {
        "id": 184571,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALANA EM AÇO - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543616768093e078215a.webp"
      },
      {
        "id": 184572,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALANA EM AÇO - BRANCO/TERRACOTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543621168093e33d7922.webp"
      },
      {
        "id": 184573,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALANA EM AÇO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543621968093e3bb541a.webp"
      },
      {
        "id": 184574,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COZ 910 4P 2G C/ 2 P. DE ABRIR- ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472312926824a23c62159.webp"
      },
      {
        "id": 184575,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "KIT 910 4P 2G C/ 2 P. DE ABRIR- ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472315986824a36e45b42.webp"
      },
      {
        "id": 184576,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COZ.1210 4P 1G C/ 2 P. DE COR. - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472314496824a2d930f23.webp"
      },
      {
        "id": 184577,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COZ 1210 4P 1G C/ 2 P. DE CORRER - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543611068093dcedc63b.webp"
      },
      {
        "id": 184587,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COOKTOP GAS 5Q ATLAS AGILE UP GLASS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543613068093de26e722.webp"
      },
      {
        "id": 184588,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COOKTOP DAKO SUPREME 5 BOCAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543615568093dfba2ca3.webp"
      },
      {
        "id": 184590,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COOKTOP ATLAS TRIPLA CHAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543618768093e1b40c90.webp"
      },
      {
        "id": 184597,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 1,40 X 0,75 C/ 6 CAD. BR SEM TAMPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/17461341546813e48a97738.webp"
      },
      {
        "id": 184598,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 1,20 X 0,75 C/ 4 CAD. PT SEM TAMPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460528106812a6cabee49.webp"
      },
      {
        "id": 184599,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 0,75 X 1,40 C/ 6 CAD. PT SEM TAMPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460528006812a6c09e50c.webp"
      },
      {
        "id": 184600,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 0,75 X 1,40 C/ 6 CADEIRAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543658468093fa8a1732.webp"
      },
      {
        "id": 184601,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "CONJ. BIANCA 0,7 5 X1,20 C/ 4 Cd- OURO ENVELHECIDO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543720268094212c6704.webp"
      },
      {
        "id": 184602,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 0,75 X 1,20 C/ 4 CADEIRAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454372746809425a1c950.webp"
      },
      {
        "id": 184603,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "CONJ. BIANCA 0,75 X 0,75 C/ 4 CAD. S/ TAMPO PT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543701468094156cab8b.webp"
      },
      {
        "id": 184604,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "CONJUNTO BIANCA 0,75 X 0,75 C/ 4 CAD. BR SEM TAMPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745437097680941a9e7ec2.webp"
      },
      {
        "id": 184611,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA SKY 1P 3G - MEL/PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437312680942805ebfc.webp"
      },
      {
        "id": 184612,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA  SKY 1P 3G - BRANCA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454373296809429185aa6.webp"
      },
      {
        "id": 184613,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA SKY 1P 3G - AMENDOA WOOD",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454373426809429e56186.webp"
      },
      {
        "id": 184614,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA SEVILHA 1P 5G C/ PORTA JOIAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437426680942f2553dc.webp"
      },
      {
        "id": 184615,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CÔMODA SEVILHA 1P 4G C/ PORTA JOIAS - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437439680942ff968b9.webp"
      },
      {
        "id": 184616,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "CÔMODA SAPATEIRA ECCOS - NATURE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543625068093e5a006f8.webp"
      },
      {
        "id": 184617,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "CÔMODA SAPATEIRA ECCOS - GIANDUIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543625768093e6181f2d.webp"
      },
      {
        "id": 184620,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA MILÃO 1P 5G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543626868093e6cb92c8.webp"
      },
      {
        "id": 184621,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CÔMODA MILÃO 1P 5G - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543627768093e751163e.webp"
      },
      {
        "id": 184622,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CÔMODA MILÃO  1P 5G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543628668093e7e5a9ee.webp"
      },
      {
        "id": 184623,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA LONDRES 2P 4G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543631568093e9be77ed.webp"
      },
      {
        "id": 184624,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CÔMODA LONDRES 2P 4G - ATCAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543632268093ea2a5bfe.webp"
      },
      {
        "id": 184628,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA JADE 8G - PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543633468093eae1817b.webp"
      },
      {
        "id": 184629,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA JADE 8G - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543634568093eb9069d2.webp"
      },
      {
        "id": 184630,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA JADE 8G - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543635668093ec401417.webp"
      },
      {
        "id": 184631,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA JADE 8G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543637168093ed373880.webp"
      },
      {
        "id": 184632,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "CÔMODA DETROIT NEW - JEQUITIBA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543638768093ee3137dc.webp"
      },
      {
        "id": 184633,
        "categoria": [
          "Infantil"
        ],
        "nomeDoProduto": "CÔMODA  CATATAU NEW 3GAV - BCO/RS/NAT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543640768093ef7e8024.webp"
      },
      {
        "id": 184649,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO SUPREME D-20 0.78 X 1.88",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543647868093f3e51595.webp"
      },
      {
        "id": 184650,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO SUPREME D-20 - 0.88 X 1.88",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543648668093f46dc8c5.webp"
      },
      {
        "id": 184651,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO SUPREME CASAL D-20 - 1.38 X 1.88",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543650068093f54e6028.webp"
      },
      {
        "id": 184654,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO MERCURIO 1.38 X 1.88 C/ 26 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543651468093f62b28d5.webp"
      },
      {
        "id": 184658,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER MLSP 1.58 X 1.98 X 0.25",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543668968094011047de.webp"
      },
      {
        "id": 184659,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER MlSP 1.38 X 1.88 X 0.25",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543668968094011047de.webp"
      },
      {
        "id": 184660,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-45 CASAL C/22 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543678568094071b2943.webp"
      },
      {
        "id": 184661,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 CASAL C/14",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745436874680940ca0ba71.webp"
      },
      {
        "id": 184662,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 CASAL C/ 17 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745436909680940ed5aed2.webp"
      },
      {
        "id": 184663,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 0.88 C/17",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745436909680940ed5aed2.webp"
      },
      {
        "id": 184664,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 0.88 C/14",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454369686809412802e8d.webp"
      },
      {
        "id": 184665,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 0.78 C/17",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454369686809412802e8d.webp"
      },
      {
        "id": 184666,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 0.78 C/14",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745436909680940ed5aed2.webp"
      },
      {
        "id": 184669,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO D-33 C/ 22 CM SLT- 0.88 X 1.88 X 0.22",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745436909680940ed5aed2.webp"
      },
      {
        "id": 184670,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO D-33 C/ 22 CM QUEEN - 1.58 X 1.88 X 0.22",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543707368094191c5ef1.webp"
      },
      {
        "id": 184671,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO D-33 C/ 22 CM CASAL - 1.38 X 1.88 X 0.22",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543707368094191c5ef1.webp"
      },
      {
        "id": 184675,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO CASAL GOIAS D-20 12 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437170680941f2673ba.webp"
      },
      {
        "id": 184678,
        "categoria": [
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR 60 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454371986809420e41576.webp"
      },
      {
        "id": 184679,
        "categoria": [
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR 125 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543720668094216dc57e.webp"
      },
      {
        "id": 184682,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA CASAL CLARA - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437239680942371e9c4.webp"
      },
      {
        "id": 184683,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA CASAL CLARA - DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543927968094a2f851eb.webp"
      },
      {
        "id": 184686,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA BOX SOLTEIRO 10 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437149680941ddca4e0.webp"
      },
      {
        "id": 184687,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA BOX CASAL 10 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543718968094205b16b2.webp"
      },
      {
        "id": 184689,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA BIBOX COM BAU E GAV. - JACARANDA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543722168094225c2f43.webp"
      },
      {
        "id": 184690,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA BIBOX COM BAU E GAV. - CAMARU",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437240680942387bb3b.webp"
      },
      {
        "id": 184691,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA BIBOX COM BAU E GAV. - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454372626809424e08224.webp"
      },
      {
        "id": 184693,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA BAU JADE C/ GAV. - NATURE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437539680943637ba19.webp"
      },
      {
        "id": 184694,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA BAU JADE C/ GAV. - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454375556809437319d37.webp"
      },
      {
        "id": 184695,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA AUXILIAR 0.90 ELEGANZA NATURE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745439201680949e1dd394.webp"
      },
      {
        "id": 184696,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA AUXILIAR 0.90 ELEGANZA JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745439218680949f272016.webp"
      },
      {
        "id": 184697,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA AUXILIAR 0.90 ELEGANZA BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454373066809427a26242.webp"
      },
      {
        "id": 184698,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "Caixa C/ 2 espelhos 0.70 x 0.20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-06-27/1751027364685e8ea43d929.webp"
      },
      {
        "id": 184699,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA VIVACE PLUS - TECIDO CASTOR",
        "imagem": ""
      },
      {
        "id": 184700,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA VIVACE PLUS - TECIDO CARAMELO",
        "imagem": ""
      },
      {
        "id": 184701,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA TUBOLAR INDIVIDUAL C/4 UNIDADES",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437400680942d8d844c.webp"
      },
      {
        "id": 184702,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA ESTOFADA ALBERTO LINHO 303 - COR 07",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745438150680945c668ea2.webp"
      },
      {
        "id": 184703,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA ESTOFADO ALB- COR 22 CX C/ 2 - CINZA CLARO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454380366809455491c83.webp"
      },
      {
        "id": 184704,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA ESTOFADA ALBERTO - COR 14 CX C/ 2 - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745438069680945753f8b4.webp"
      },
      {
        "id": 184705,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA ESTOFADA ALB - COR 07 CX C/ 2 - GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745438112680945a052a19.webp"
      },
      {
        "id": 184710,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CABECEIRA BOX 1.40 / 1.60 ZARA CAPITONÊ - PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437666680943e2e1b61.webp"
      },
      {
        "id": 184711,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CABECEIRA BOX 1.40 / 1.60 ZARA CAPITONÊ - JACARANDA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437678680943eee219e.webp"
      },
      {
        "id": 184712,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CABECEIRA BOX 1.40 / 1.60 ZARA CAPITONÊ - CAMARU",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454377606809444028220.webp"
      },
      {
        "id": 184713,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CABECEIRA ANA ESTOFADA 1.40 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543797468094516b4c6b.webp"
      },
      {
        "id": 184715,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET MAGNUM 0.90 OFF WHITE/CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543806768094573b2e6f.webp"
      },
      {
        "id": 184716,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET MAGNUM 0.90 FENDI/FREIJO NOBRE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454380816809458133532.webp"
      },
      {
        "id": 184723,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET AÇORES - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543810368094597e903a.webp"
      },
      {
        "id": 184724,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BERÇO MINI-CAMA ALVIN - NATURE / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438119680945a73dcfe.webp"
      },
      {
        "id": 184725,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BERÇO MINI-CAMA ALVIN - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438134680945b6eb154.webp"
      },
      {
        "id": 184727,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BELICHE PRISMA PLUS BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437601680943a1b07b3.webp"
      },
      {
        "id": 184728,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BELICHE FLORIPA PLUS JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437649680943d16e5c0.webp"
      },
      {
        "id": 184729,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BELICHE ABSOLUT JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745437690680943fa726c1.webp"
      },
      {
        "id": 184730,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BELICHE ABSOLUT BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543769968094403c02f9.webp"
      },
      {
        "id": 184731,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE QUEEN EM SUEDE - 1,58 X 1,98 M",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/1746142202681403fa02f24.webp"
      },
      {
        "id": 184733,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BASE PARA CAMA SUPER QUEEN - 193 X 2.03",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543771268094410f2441.webp"
      },
      {
        "id": 184735,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BASE PARA CAMA SOLTEIRO - 0.88 X 1.88",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454377286809442019e66.webp"
      },
      {
        "id": 184737,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE CASAL  EM SUEDE - 1,38 X 1,88 M",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454377566809443c2a981.webp"
      },
      {
        "id": 184738,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE BAU SOLTEIRO SUEDE - 0.88 X 1.88",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454377826809445692cdd.webp"
      },
      {
        "id": 184739,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE BAU LIGHT SUEDE AMASSADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454378346809448a5076b.webp"
      },
      {
        "id": 184743,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURY SOLTEIRO 0.88 X 1.88 X 0.56",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543824668094626649dc.webp"
      },
      {
        "id": 184744,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURY 1,93 X 1,98 X 0 ,56 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454383006809465c535b4.webp"
      },
      {
        "id": 184745,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURY 1,58 X 1,98 X 0,56 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454383006809465c535b4.webp"
      },
      {
        "id": 184746,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURY 1,38 X 1,88 X 0,56 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/17454383666809469e035a7.webp"
      },
      {
        "id": 184752,
        "categoria": [
          "Adega"
        ],
        "nomeDoProduto": "BAR ADEGA BALI - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438397680946bdd815d.webp"
      },
      {
        "id": 184753,
        "categoria": [
          "Adega"
        ],
        "nomeDoProduto": "BAR ADEGA BALI - OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438408680946c82d6ff.webp"
      },
      {
        "id": 184754,
        "categoria": [
          "Adega"
        ],
        "nomeDoProduto": "BAR ADEGA BALI - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438418680946d2d7d95.webp"
      },
      {
        "id": 184773,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "BALCÃO MULTIUSO HAVANA NEW - MADEIRADO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454384946809471e6813d.webp"
      },
      {
        "id": 184774,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "BALCÃO MULTIUSO HAVANA NEW - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543832068094670dd35a.webp"
      },
      {
        "id": 184775,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "BALCÃO MULTIUSO HAVANA NEW - ACACIA MADEIRADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/174543830668094662c495a.webp"
      },
      {
        "id": 184783,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO DUNA 2P 1G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438550680947560db40.webp"
      },
      {
        "id": 184784,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO DENVER 2P - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454385616809476140b17.webp"
      },
      {
        "id": 184785,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP MUNIQUE - OFF WHITE / CANELATO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438580680947749eafd.webp"
      },
      {
        "id": 184786,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP MUNIQUE - MADEIRADO REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745438710680947f6ca838.webp"
      },
      {
        "id": 184787,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP MUNIQUE - MADEIRADO / PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745438596680947845bfcc.webp"
      },
      {
        "id": 184791,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G TP VAZADO - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438658680947c278afb.webp"
      },
      {
        "id": 184792,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G TP VAZADO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438704680947f04310d.webp"
      },
      {
        "id": 184793,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G - PRETO (TP VAZADO)",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438719680947ff4f2e5.webp"
      },
      {
        "id": 184794,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454387466809481a91e7f.webp"
      },
      {
        "id": 184795,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543876968094831c8ded.webp"
      },
      {
        "id": 184796,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.20 2P 3G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745439110680949868ef20.webp"
      },
      {
        "id": 184797,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.05 1P 1G - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543882568094869582bd.webp"
      },
      {
        "id": 184798,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.05 1P 1G - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454390346809493a01a03.webp"
      },
      {
        "id": 184799,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 1.05 1P 1G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-29/174596892168115f198bc4f.webp"
      },
      {
        "id": 184801,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 0.80 2P - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454385546809475ac6d0f.webp"
      },
      {
        "id": 184802,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP GOLD & SILVER 0.80 2P - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543856968094769524bb.webp"
      },
      {
        "id": 184803,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BALCÃO CLARA PLUS 3P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438582680947768131d.webp"
      },
      {
        "id": 184804,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BALCÃO CLARA PLUS 3P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454385916809477fa2558.webp"
      },
      {
        "id": 184805,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BALCÃO CLARA PLUS 3P 2G - ATACAMA/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438636680947ac20d1f.webp"
      },
      {
        "id": 184806,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO 3 PTS 1 GAV. - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/174543880768094857c49f6.webp"
      },
      {
        "id": 184808,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745439210680949ea71059.webp"
      },
      {
        "id": 184809,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-23/1745439030680949366448e.webp"
      },
      {
        "id": 184810,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO 1,20 3 GAVETAS 2 PTS RUSTICO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454387956809484b21c27.webp"
      },
      {
        "id": 184811,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO 1,20 3 GAVETAS 2 PTS CANELATO BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454388606809488cc1d2b.webp"
      },
      {
        "id": 184812,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO 1,20 3 GAVETAS 2 PTS CANELATO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438872680948984e7c7.webp"
      },
      {
        "id": 184815,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "ARM. MULTIUSO 1.83 M - ATACAMA / OFF-WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438897680948b1c1c56.webp"
      },
      {
        "id": 184816,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "ARM. MULTIUSO 1.83 M - ATACAMA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/1745438908680948bcdfa10.webp"
      },
      {
        "id": 184821,
        "categoria": [
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR BARI 1.00 MTS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454197266808fdce6cea9.webp"
      },
      {
        "id": 186831,
        "categoria": [
          "Ventilador"
        ],
        "nomeDoProduto": "VENTILADOR OSC COL TURBO 6P 40CM PR 220V PRE.",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-23/17454096406808d668e4374.webp"
      },
      {
        "id": 189510,
        "categoria": [
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR 16 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461894646814bc98c8705.webp"
      },
      {
        "id": 189511,
        "categoria": [
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR 35 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461894866814bcaed5659.webp"
      },
      {
        "id": 189512,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "CONJUNTO DE MESA VALENÇA C/ JUNCO - 0.75 X 0.75",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/174604176868127ba8451c1.webp"
      },
      {
        "id": 189513,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "CONJUNTO DE MESA VALENÇA C/ JUNCO - 1.40 X 0.75",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/174604154968127acdcfbca.webp"
      },
      {
        "id": 189514,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "CONJUNTO DE MESA VALENÇA C/ JUNCO - 1.20 X 0.75",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/174604176868127ba84d32e.webp"
      },
      {
        "id": 189518,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "HOME ROYAL - CEDRO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461927876814c9935bb53.webp"
      },
      {
        "id": 189519,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "HOME ROYAL - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461927986814c99e6bbe5.webp"
      },
      {
        "id": 189520,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUCCA - FENDI / FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461938296814cda579a64.webp"
      },
      {
        "id": 189521,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUCCA - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-02/17461938006814cd8852c60.webp"
      },
      {
        "id": 189537,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. SÃO PAULO 6 PTS ATUALLE - MAD. / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-05/17464499726818b634466d5.webp"
      },
      {
        "id": 189577,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COOKTOP GOLD 5 BOCAS AUTOMATICO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-06/1746540182681a16966af3f.webp"
      },
      {
        "id": 189578,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CANADA 6 PORTAS 8 GAV. CIN. / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-06/1746540502681a17d6f2927.webp"
      },
      {
        "id": 189580,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ITA 6 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-06/1746541045681a19f51d06c.webp"
      },
      {
        "id": 189581,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ITA 6 PORTAS - HAVANA RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-06/1746541154681a1a62690f1.webp"
      },
      {
        "id": 189582,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. CAPELLA 4 PTS 3 GAV. - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-06/1746541398681a1b560039a.webp"
      },
      {
        "id": 189592,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.9 MTS C/ PORTA COPO - BEGE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-27/1745779548680e7b5cbae1d.webp"
      },
      {
        "id": 189593,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS C/3 MODULOS 2.9 MTS C/  COPO - AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-07/1746638444681b966c9c6be.webp"
      },
      {
        "id": 189594,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFAD ZEUS C/3 MODULOS 2.9 MTS C/  COPO - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-07/1746638444681b966caea18.webp"
      },
      {
        "id": 189601,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO MORFEU 2.90 MTS - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-09/1746811655681e3b07c325d.webp"
      },
      {
        "id": 189602,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO MORF 2.90 MTS - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-09/1746811698681e3b322bfc5.webp"
      },
      {
        "id": 189603,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO MORFEU 2.90 MTS - BEGE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-09/1746811862681e3bd6e2adc.webp"
      },
      {
        "id": 192300,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FORNO ELETRICO BEST 48 LITROS C/ ROTISSEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-11/174701283068214cdeee833.webp"
      },
      {
        "id": 192301,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FORNO ELETRICO BEST 60 LITROS C/ ROTISSEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-11/174701283868214ce6b37e0.webp"
      },
      {
        "id": 192302,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA EAMES - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-11/174701341568214f27e3398.webp"
      },
      {
        "id": 202885,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 10 KG - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745495784680a26e8001bb.webp"
      },
      {
        "id": 202886,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 10 KG - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745495768680a26d84c011.webp"
      },
      {
        "id": 202887,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 6 PORTAS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-13/17471697666823b1e60f772.webp"
      },
      {
        "id": 202888,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 4 PORTAS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-13/17471700236823b2e79fa41.webp"
      },
      {
        "id": 202889,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 4 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-13/17471700736823b319ce6a3.webp"
      },
      {
        "id": 202890,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 4 PTS - ACACIA REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-13/17471702596823b3d3b92a4.webp"
      },
      {
        "id": 202891,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ATHENAS ATUALLE - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/174722537568248b1f0465f.webp"
      },
      {
        "id": 202892,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ATHENAS ATUALLE - CANELATO \\ OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/174722538168248b25bd78d.webp"
      },
      {
        "id": 202894,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO RECIFE CINAMOMO \\ BRANCO",
        "imagem": ""
      },
      {
        "id": 202895,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO REIS 6 PORTAS - CINAMOMO \\ BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472332406824a9d8c4c27.webp"
      },
      {
        "id": 202896,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CABECEIRA ANA 1.60 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472424666824cde26ca3d.webp"
      },
      {
        "id": 202897,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL CRISTAL CHUMBO SAVANA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-14/17472427166824cedc8d6ea.webp"
      },
      {
        "id": 203000,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARIES 6 PORTAS - CINAMOMO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747690439682ba3c726aad.webp"
      },
      {
        "id": 203001,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO ANJOS C/ 9 GAVETAS E ESPELHO - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747690560682ba44029e19.webp"
      },
      {
        "id": 203002,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GALAXY 3 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747690906682ba59a60754.webp"
      },
      {
        "id": 203004,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO PELMEX MAX SPORT 1.38 X 1.88 X 0.22",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747696230682bba661e54a.webp"
      },
      {
        "id": 204439,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURIO SOLTEIRAO 1.08 X1.88 X0.56",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-26/17482923846834d3209610b.webp"
      },
      {
        "id": 204440,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO MERCURIO SOLTEIRAO 1.08 X1.88 X 0.56",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-26/17482924456834d35d981d6.webp"
      },
      {
        "id": 204457,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "PANELEIRO CLARA PLUS - ATACAMA / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-27/17483701886836030c91362.webp"
      },
      {
        "id": 204458,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "KIT 910 C/ PORTA DE CORRER - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-27/1748370401683603e1e46cc.webp"
      },
      {
        "id": 204459,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "KIT 910 C/ PORTA DE CORRER - ATACAMA / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-27/1748370457683604194fcc0.webp"
      },
      {
        "id": 204500,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CABECEIRA ANA SOLTEIRO 0.88 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-29/17485451376838ae7162a67.webp"
      },
      {
        "id": 205019,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "TAMPO EM GRANITO - 0.75 X 0.75 M",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/1746040786681277d25df53.webp"
      },
      {
        "id": 205020,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TRIPLEX GOLD - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855847680fa5677577e.webp"
      },
      {
        "id": 205021,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TRIPLEX GOLD - FREIJÓ",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855848680fa568d8064.webp"
      },
      {
        "id": 205022,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GLIESE 6 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855919680fa5afe96ae.webp"
      },
      {
        "id": 205023,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CANCUN 7P 2G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-02/1748893182683dfdfe96c52.webp"
      },
      {
        "id": 205024,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CANCUN 7P 2G - AREIA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855946680fa5ca1dcf8.webp"
      },
      {
        "id": 205025,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "Lavadora Libell 10 kg - Branco",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855773680fa51d156d3.webp"
      },
      {
        "id": 205026,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA MADRI C/ ARDOSIA - CRAQUEADO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855684680fa4c452f84.webp"
      },
      {
        "id": 205027,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA MADRI C/ ARDOSIA - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855685680fa4c55a967.webp"
      },
      {
        "id": 205028,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE ALTA AÇO 5 PRATELEIRAS - FREIJO / PRETO FOSCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855748680fa504b3985.webp"
      },
      {
        "id": 205029,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "CONJUNTO MESA ATALANTA - OFF",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855705680fa4d9563f8.webp"
      },
      {
        "id": 205030,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "CONJUNTO MESA ATALANTA - NATURE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855706680fa4da9f8ec.webp"
      },
      {
        "id": 205031,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "CONJUNTO MESA ATALANTA - CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855707680fa4dbcbe03.webp"
      },
      {
        "id": 205032,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "COMODA / ROUPEIRO MEGA 2 PTS - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855835680fa55b4cdee.webp"
      },
      {
        "id": 205033,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "COMODA / ROUPEIRO MEGA 2 PTS - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855836680fa55cb8832.webp"
      },
      {
        "id": 205034,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BELICHE TORNEADA PALMO 80 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843885680f76ad892d0.webp"
      },
      {
        "id": 205035,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BELICHE GOLD & SILVER",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843887680f76af7a009.webp"
      },
      {
        "id": 205036,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855626680fa48a03383.webp"
      },
      {
        "id": 205037,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GLIESE 6 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855970680fa5e24d344.webp"
      },
      {
        "id": 205038,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GOLDEN 6 PORTAS - FREIJO / SOFT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642447683a2a8f3d88f.webp"
      },
      {
        "id": 205039,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GOLDEN 6 PORTAS - FREIJO / GRIS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642454683a2a9643776.webp"
      },
      {
        "id": 205040,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GENOVA KIT´S PARANA 6 PORTAS - NOGUEIRA / OFF RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642607683a2b2f03593.webp"
      },
      {
        "id": 205041,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT CORE 8 PORTAS - FREIJO / NERO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642748683a2bbc011da.webp"
      },
      {
        "id": 205042,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT CORE 8 PORTAS - FREIJO / VANILLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642753683a2bc1c51f7.webp"
      },
      {
        "id": 205043,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT APOLO 6 PORTAS - FREIJO / SOFT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643014683a2cc60f517.webp"
      },
      {
        "id": 205044,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT APOLO 6 PORTAS - FREIJO / GRIS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643020683a2ccccbc10.webp"
      },
      {
        "id": 205045,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA FERRARA PLUS - FREIJO / SUPREMO RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643183683a2d6f6d29f.webp"
      },
      {
        "id": 205046,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA FERRARA PLUS - FREIJO / SOFT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643193683a2d7905889.webp"
      },
      {
        "id": 205109,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK C/ PAINEL LEGACY - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-04/17490732616840bd6d619ab.webp"
      },
      {
        "id": 205311,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "SKD AIR FRYER AMVOX ARF 1222 OVEN 12L",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-11/174965054168498c6dcb4b9.webp"
      },
      {
        "id": 205312,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "AIR FRYER AMVOX ARF 1245 OVEN 4.5L",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-11/174965064068498cd07e7db.webp"
      },
      {
        "id": 205390,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO RETRATIL ROMEU SOLAR LUXO 2.30 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-13/1749818078684c1adec32e8.webp"
      },
      {
        "id": 205404,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461336046813e2644249f.webp"
      },
      {
        "id": 205405,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - PRATA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461337886813e31c29e11.webp"
      },
      {
        "id": 205406,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461343616813e55966911.webp"
      },
      {
        "id": 205407,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - IMBUIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461344236813e5970fcad.webp"
      },
      {
        "id": 205408,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461340666813e43211783.webp"
      },
      {
        "id": 205409,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "CAIXA C/ 2 ESPELHOS 0.60 x 0.20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/17461321906813dcde283ad.webp"
      },
      {
        "id": 205544,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALEXIA PRIME - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-17/17501943786851d8caa22ba.webp"
      },
      {
        "id": 205545,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALEXIA PRIME - CINAMOMO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-17/17501944056851d8e50b5fc.webp"
      },
      {
        "id": 205616,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GOLDEN 6 PORTAS - NOGUEIRA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-23/1750685110685955b644993.webp"
      },
      {
        "id": 205617,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GENOVA KIT´S PARANA 6 PORTAS - FREIJO / SUPREMO RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-23/175068558868595794bfb29.webp"
      },
      {
        "id": 205618,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA FERRARA PLUS - FREIJO / SOFT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-23/175068576368595843d1437.webp"
      },
      {
        "id": 205619,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT STYLE - FREIJO / VANILLA RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-23/17506860866859598689c49.webp"
      },
      {
        "id": 205620,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT STYLE - FREIJO / SUPREMO RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-23/17506860436859595bd17bf.webp"
      },
      {
        "id": 205744,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO MORF. 2.00 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-25/1750859125685bfd7560a64.webp"
      },
      {
        "id": 205745,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO QUARTZO 2.50 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-25/1750859572685bff346dde4.webp"
      },
      {
        "id": 206019,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "CANTINHO DO CAFÉ FLOW - OFF / FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111152685fd5f058b44.webp"
      },
      {
        "id": 206020,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "CANTINHO DO CAFÉ FLOW - PRETO / FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111164685fd5fc77e0a.webp"
      },
      {
        "id": 206021,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET 4 PORTAS FLOW - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111392685fd6e0b2b22.webp"
      },
      {
        "id": 206022,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET 4 PORTAS FLOW - OFF WWHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111407685fd6ef313a1.webp"
      },
      {
        "id": 206023,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET 4 PORTAS FLOW - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111424685fd700bf163.webp"
      },
      {
        "id": 206024,
        "categoria": [
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ADEGA NEW ODIN - OFF WHITE / FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111688685fd8089afb9.webp"
      },
      {
        "id": 206025,
        "categoria": [
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ZEUS - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111873685fd8c1775ae.webp"
      },
      {
        "id": 206026,
        "categoria": [
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ZEUS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111886685fd8ce50bef.webp"
      },
      {
        "id": 206027,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112291685fda63235f7.webp"
      },
      {
        "id": 206028,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - OFF/ FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112303685fda6f308ec.webp"
      },
      {
        "id": 206029,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112313685fda79bd724.webp"
      },
      {
        "id": 206030,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112321685fda81d3a10.webp"
      },
      {
        "id": 206031,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "TOUCADOR ORGANIC - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114471685fe2e72c25d.webp"
      },
      {
        "id": 206032,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "TOUCADOR ORGANIC - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114479685fe2ef9c5e0.webp"
      },
      {
        "id": 206033,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUXO NEW - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114527685fe31f56439.webp"
      },
      {
        "id": 206034,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUXO NEW - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114537685fe32978852.webp"
      },
      {
        "id": 206035,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUXO NEW - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114546685fe3324177e.webp"
      },
      {
        "id": 206036,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114589685fe35d04366.webp"
      },
      {
        "id": 206037,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - FREIJÓ / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114597685fe3650102d.webp"
      },
      {
        "id": 206038,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114608685fe370e5b58.webp"
      },
      {
        "id": 206039,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114618685fe37a7c8a6.webp"
      },
      {
        "id": 206040,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA 2 GAVETAS - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114650685fe39acb83e.webp"
      },
      {
        "id": 206041,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA 2 GAVETAS - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114658685fe3a228308.webp"
      },
      {
        "id": 206042,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA 2 GAVETAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114669685fe3addedfe.webp"
      },
      {
        "id": 206043,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE COMPUTADOR PRATICA - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114690685fe3c20a492.webp"
      },
      {
        "id": 206044,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE COMPUTADOR PRATICA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114696685fe3c83feb0.webp"
      },
      {
        "id": 206045,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE COMPUTADOR PRATICA - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114704685fe3d0102e9.webp"
      },
      {
        "id": 206046,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "TOUCADOR ORGANIC - OFF WHITE / FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114502685fe306dc92d.webp"
      },
      {
        "id": 206050,
        "categoria": [
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ADEGA NEW ODIN - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-03/17515702046866d71c1c5a4.webp"
      },
      {
        "id": 206074,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TOLEDO 6 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855850680fa56a3abf8.webp"
      },
      {
        "id": 206075,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ANTARES 6 PORTAS PRIME - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855955680fa5d3e6b29.webp"
      },
      {
        "id": 206076,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-02/175145960168652711cc7ef.webp"
      },
      {
        "id": 206077,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855725680fa4ed510f0.webp"
      },
      {
        "id": 206078,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - ACACIA / REFLECTA BRILHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-02/17514596206865272416541.webp"
      },
      {
        "id": 206079,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "KIT COZINHA GENOVA MADINE - RIPADO / ARENAS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855700680fa4d4814e4.webp"
      },
      {
        "id": 206080,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "KIT COZINHA GENOVA MADINE - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855701680fa4d5d9dd8.webp"
      },
      {
        "id": 206081,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "Colchão Supreme D-20 C/ 12 cm 0.88 x 1.88",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855566680fa44eb550a.webp"
      },
      {
        "id": 206082,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G TAMPO VAZADO - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855613680fa47d607f8.webp"
      },
      {
        "id": 206083,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G TAMPO VAZADO - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855614680fa47e39dd1.webp"
      },
      {
        "id": 206084,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G TAMPO VAZADO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855615680fa47f0352a.webp"
      },
      {
        "id": 206085,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.05 GOLD 1P 1G - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855618680fa482de02c.webp"
      },
      {
        "id": 206086,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.05 GOLD 1P 1G - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855619680fa483bf0a0.webp"
      },
      {
        "id": 206087,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.05 GOLD 1P 1G - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855620680fa48497792.webp"
      },
      {
        "id": 206088,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 0.80 GOLD 2P - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855621680fa48561dd3.webp"
      },
      {
        "id": 206089,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855626680fa48ab4731.webp"
      },
      {
        "id": 206090,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855627680fa48b78e66.webp"
      },
      {
        "id": 206091,
        "categoria": [
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO COOKTOP GOLD 5 BOCAS - SIMPLES",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855635680fa493c48d0.webp"
      },
      {
        "id": 206092,
        "categoria": [
          "Penteadeira"
        ],
        "nomeDoProduto": "PENTEADEIRA GOLD C/ LED - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855844680fa564caa0c.webp"
      },
      {
        "id": 206093,
        "categoria": [
          "Penteadeira"
        ],
        "nomeDoProduto": "PENTEADEIRA GOLD C/ LED - ROSE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855846680fa566174e8.webp"
      },
      {
        "id": 206094,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA RAVENA PLUS C/ CRISTALEIRA - FREIJO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749733661684ad11d9c356.webp"
      },
      {
        "id": 206095,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA COMPACTA OLINDA  + BLC FREIJO / RIPADO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734179684ad323e1aca.webp"
      },
      {
        "id": 206096,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA COMPACTA OLINDA  + BLC FREIJO / RIPADO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734258684ad3722d1ae.webp"
      },
      {
        "id": 206097,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO OLINDA FREIJO / RIPADO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734450684ad43257f5a.webp"
      },
      {
        "id": 206098,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO OLINDA FREIJO / RIPADO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734461684ad43d5684b.webp"
      },
      {
        "id": 206099,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT NURIA FREIJÓ / RIPADO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739294684ae71e04910.webp"
      },
      {
        "id": 206100,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT NURIA FREIJÓ / RIPADO / GRAFITE ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739302684ae726cf3ce.webp"
      },
      {
        "id": 206101,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PILAR 11 PTS - FREIJO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739673684ae89923584.webp"
      },
      {
        "id": 206102,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PILAR 11 PTS - FREIJO / RIPADO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739680684ae8a0e0096.webp"
      },
      {
        "id": 206103,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT NEW LIVIA - FREIJO / RIPADO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749740057684aea196d01b.webp"
      },
      {
        "id": 206104,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT NEW LIVIA - FREIJO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749740067684aea236453e.webp"
      },
      {
        "id": 206105,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA MALIBU NEW - NATURE 3D",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751118610685ff312ee34c.webp"
      },
      {
        "id": 206106,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA MALIBU NEW - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751118679685ff357de095.webp"
      },
      {
        "id": 206107,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA MALIBU NEW - BCO / LILAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751118759685ff3a74eef6.webp"
      },
      {
        "id": 206280,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "PES PLASTICOS PARA ROUPEIRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843868680f769c8dada.webp"
      },
      {
        "id": 206281,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA VICENZA - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516382716867e0ff88381.webp"
      },
      {
        "id": 206282,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA VICENZA - CANELATO / NATURA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516382556867e0efbc57a.webp"
      },
      {
        "id": 206283,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE ESCRITÓRIO 3 GAVETAS - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516391636867e47b93c53.webp"
      },
      {
        "id": 206284,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE ESCRITÓRIO 3 GAVETAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516391746867e4860538b.webp"
      },
      {
        "id": 206285,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT CEARA 4 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-08/1751983140686d242423868.webp"
      },
      {
        "id": 206286,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA SALINAS TOP - CANELATO / PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752090922686ec92ad092d.webp"
      },
      {
        "id": 206287,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA SALINAS TOP - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752090931686ec9330602b.webp"
      },
      {
        "id": 206288,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA SALINAS TOP - CANELATO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-09/1752090940686ec93cb5d6f.webp"
      },
      {
        "id": 181732,
        "categoria": [
          "Ventilador"
        ],
        "nomeDoProduto": "VENTILADOR OSC COLUNA 40 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856115680fa6732e11a.webp"
      },
      {
        "id": 181748,
        "categoria": [
          "Bicicleta"
        ],
        "nomeDoProduto": "TINA MINI A-12 FEM. ROSA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855749680fa505c5c0b.webp"
      },
      {
        "id": 181750,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "TAMPO PARA COZINHA ALVORADA C/ COSTAS - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/1746040816681277f06433b.webp"
      },
      {
        "id": 181752,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "TAMPO PARA COZINHA - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/17460408616812781deb9f7.webp"
      },
      {
        "id": 181756,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "TAMPO EM ARDOSIA - 1.80 X 0.80 M",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/1746040741681277a5a1c0c.webp"
      },
      {
        "id": 181757,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "TAMPO EM ARDOSIA - 1.40 X 0.75 M",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/1746040764681277bce052c.webp"
      },
      {
        "id": 181758,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "TAMPO EM ARDOSIA - 1.20 X 0.75 M",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/1746040774681277c6467a4.webp"
      },
      {
        "id": 181759,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "TAMPO EM GRANITO - 0.75 X 0.75 M",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/1746040786681277d25df53.webp"
      },
      {
        "id": 181760,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "TAMPO CIRCULAR EM ARDOSIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/17460409436812786fdc946.webp"
      },
      {
        "id": 181761,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "TAMPO 1200 - PTO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/1746041053681278dd94a96.webp"
      },
      {
        "id": 181772,
        "categoria": [
          "TV"
        ],
        "nomeDoProduto": "SUPORTE PARA TV",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856109680fa66dbf49f.webp"
      },
      {
        "id": 181799,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "SOFÁ CAMA ROMA 1.80 MTS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856070680fa64602862.webp"
      },
      {
        "id": 181809,
        "categoria": [
          "TV"
        ],
        "nomeDoProduto": "SMARTV 32 POLEGADAS - TRONOS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-21/1747865219682e4e83141d7.webp"
      },
      {
        "id": 181810,
        "categoria": [
          "TV"
        ],
        "nomeDoProduto": "SMART TV TRONOS ''50'' POLEGADAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-21/1747865457682e4f7189f25.webp"
      },
      {
        "id": 181811,
        "categoria": [
          "TV"
        ],
        "nomeDoProduto": "SMART TV TRONOS ''43'' POLEGADAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-21/1747865326682e4eee4c796.webp"
      },
      {
        "id": 181836,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TRIPLEX GOLD - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855847680fa5677577e.webp"
      },
      {
        "id": 181837,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TRIPLEX GOLD - FREIJÓ",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855848680fa568d8064.webp"
      },
      {
        "id": 181848,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TOLEDO 6 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855850680fa56a3abf8.webp"
      },
      {
        "id": 181849,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TOLEDO 6 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855851680fa56b8c295.webp"
      },
      {
        "id": 181853,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TOKIO 6 PTS - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855852680fa56cddc74.webp"
      },
      {
        "id": 181854,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TOKIO 6 PTS - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855854680fa56e51ae2.webp"
      },
      {
        "id": 181855,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TOKIO 6 PTS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855855680fa56f9fcb7.webp"
      },
      {
        "id": 181863,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TAURI 8 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855857680fa57107d22.webp"
      },
      {
        "id": 181864,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TAURI 8 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855858680fa5725c34a.webp"
      },
      {
        "id": 181868,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 3 PTS PLUS - CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855859680fa573b5124.webp"
      },
      {
        "id": 181869,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 3 PTS PLUS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855861680fa5750b686.webp"
      },
      {
        "id": 181870,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 2P 6G - CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855862680fa57678a57.webp"
      },
      {
        "id": 181871,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SEVILHA 2P 6G - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855863680fa577e7c57.webp"
      },
      {
        "id": 181872,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO PAULO 6 PORTAS - MADEIRADO / REFLECTA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855865680fa5792ac27.webp"
      },
      {
        "id": 181873,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO PAULO 6 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855866680fa57a88b9a.webp"
      },
      {
        "id": 181874,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 6 PORTAS - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855867680fa57bcbd38.webp"
      },
      {
        "id": 181875,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 6 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855869680fa57d10d80.webp"
      },
      {
        "id": 181877,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 4 PORTAS - ACACIA REFLECTA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855870680fa57e82ec6.webp"
      },
      {
        "id": 181878,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO PLUS C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855871680fa57fd66fe.webp"
      },
      {
        "id": 181879,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO PLUS - CINAMOMO/ OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855873680fa581255c5.webp"
      },
      {
        "id": 181880,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO PLUS - CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855874680fa58298320.webp"
      },
      {
        "id": 181883,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO 3 PTS PLUS - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855875680fa583d4308.webp"
      },
      {
        "id": 181884,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO 2 PORTAS - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855877680fa58544ad4.webp"
      },
      {
        "id": 181885,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO 2 PORTAS - CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855878680fa586acb31.webp"
      },
      {
        "id": 181886,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SANTIAGO 2 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855879680fa587dea73.webp"
      },
      {
        "id": 181897,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO RUBI 8 PTS 4 GAVETAS C/ ESPELHO - CINAMOMO / BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855881680fa5898d45a.webp"
      },
      {
        "id": 181898,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO RUBI 8 PTS 4 GAVETAS C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855882680fa58ad44df.webp"
      },
      {
        "id": 181899,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO RUBI 8 PORTAS 4 GAV. C/ ESPELHO - CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855884680fa58c43484.webp"
      },
      {
        "id": 181907,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO REIS / RECIFE 6 PORTAS - FREIJÓ",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855885680fa58d8d38c.webp"
      },
      {
        "id": 181908,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO REIS / RECIFE 6 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855886680fa58ecf32b.webp"
      },
      {
        "id": 181921,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO PORTUGAL 6 PTS PRIME - CINAMOMO / OFF WHITE / CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855888680fa59031782.webp"
      },
      {
        "id": 181922,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO PORTUGAL 6 PTS PRIME - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855889680fa59187f68.webp"
      },
      {
        "id": 181923,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO PORTUGAL 6 PTS PRIME - CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855890680fa592c6b77.webp"
      },
      {
        "id": 181924,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO PORTUGAL 6 PTS PRIME - CACAU",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855892680fa59407bf7.webp"
      },
      {
        "id": 181930,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO PANAMA/GOIAS 6 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855893680fa595729fa.webp"
      },
      {
        "id": 181959,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MONTANA 2P 2G - CANELATO 3D/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855894680fa596c9253.webp"
      },
      {
        "id": 181974,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MAFRA ARAMOVEIS 7 PTS - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855896680fa59820540.webp"
      },
      {
        "id": 181975,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MAFRA ARAMOVEIS 7 PTS - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855897680fa5997e409.webp"
      },
      {
        "id": 181976,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MAFRA ARAMOVEIS 7 PTS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855898680fa59ad38e1.webp"
      },
      {
        "id": 181982,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO LOTSE C/ PORTA DE CORRER - DEMOLIÇÃO / BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855900680fa59c2e8fc.webp"
      },
      {
        "id": 181983,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO LOTSE C/ PORTA DE CORRER - DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855901680fa59d8464f.webp"
      },
      {
        "id": 181984,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO LOTSE C/ PORTA DE CORRER - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855902680fa59edf984.webp"
      },
      {
        "id": 181993,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO LEBLON C/ ESPELHO - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855904680fa5a03836b.webp"
      },
      {
        "id": 181994,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO LEBLON C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855905680fa5a18bcf1.webp"
      },
      {
        "id": 181995,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ITAPEMA 8P 4G - MOCACCINO/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855906680fa5a2edc24.webp"
      },
      {
        "id": 181996,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ITAPEMA 8P 4G - CANELATO 3D/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855908680fa5a45a0e9.webp"
      },
      {
        "id": 181997,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ITAPEMA 8P 4G - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855909680fa5a56f0cd.webp"
      },
      {
        "id": 182002,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ITÁ 6 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855910680fa5a66e201.webp"
      },
      {
        "id": 182003,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ITÁ 6 PORTAS - HAVANA RIPADO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855911680fa5a75dcf3.webp"
      },
      {
        "id": 182018,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 6 PTS C/ ESPELHO - CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855912680fa5a858571.webp"
      },
      {
        "id": 182019,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 6 PTS C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855913680fa5a9455de.webp"
      },
      {
        "id": 182020,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 6 PORTAS 4 GAVETAS C/ ESPELHO - FREIJO / OFF",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855914680fa5aa3530d.webp"
      },
      {
        "id": 182022,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 4 PORTAS - CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855916680fa5ac2caa8.webp"
      },
      {
        "id": 182028,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GOLD 6 PORTAS - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855917680fa5ad20e56.webp"
      },
      {
        "id": 182029,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GOLD 6 PORTAS - ATACAMA / GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855918680fa5ae151f9.webp"
      },
      {
        "id": 182030,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GOLD 6 PORTAS - ATACAMA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855919680fa5af18ccc.webp"
      },
      {
        "id": 182034,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GLIESE 6 PORTAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855919680fa5afe96ae.webp"
      },
      {
        "id": 182037,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855920680fa5b0eeed8.webp"
      },
      {
        "id": 182038,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855921680fa5b1da4af.webp"
      },
      {
        "id": 182039,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PORTAS - ACACIA REFLECTA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855922680fa5b2e46c7.webp"
      },
      {
        "id": 182040,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 6 PORTAS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855923680fa5b3e3985.webp"
      },
      {
        "id": 182041,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855924680fa5b4d9133.webp"
      },
      {
        "id": 182042,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PORTAS - CANELATO / GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855925680fa5b5cd8e7.webp"
      },
      {
        "id": 182043,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855926680fa5b6b0b1c.webp"
      },
      {
        "id": 182044,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PORTAS - ACACIA REFLECTA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855927680fa5b7a370d.webp"
      },
      {
        "id": 182045,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 4 PORTAS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855928680fa5b8a7c16.webp"
      },
      {
        "id": 182046,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855929680fa5b985161.webp"
      },
      {
        "id": 182047,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PORTAS - MADEIRADO REFLECTA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855930680fa5ba90251.webp"
      },
      {
        "id": 182048,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855931680fa5bb920bc.webp"
      },
      {
        "id": 182049,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FORTALEZA 3 PORTAS - 3 D / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855932680fa5bc6feb1.webp"
      },
      {
        "id": 182054,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ESPANHA REFLECTA PREMIUM - DEMOLIÇÃO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855933680fa5bd8684c.webp"
      },
      {
        "id": 182056,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO ESPANHA C/ ESPELHO - CINAMOMO / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-09/1749500134684740e690dae.webp"
      },
      {
        "id": 182057,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO ESPANHA C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855936680fa5c05b039.webp"
      },
      {
        "id": 182064,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO DALLAS - CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855937680fa5c144db0.webp"
      },
      {
        "id": 182065,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO DALLAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855938680fa5c237de2.webp"
      },
      {
        "id": 182070,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO CLARA PLUS C/ ESPELHO - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855939680fa5c32c9d9.webp"
      },
      {
        "id": 182071,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO CLARA PLUS C/ ESPELHO - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855940680fa5c447511.webp"
      },
      {
        "id": 182072,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO CLARA PLUS C/ ESPELHO - CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855941680fa5c56edf8.webp"
      },
      {
        "id": 182073,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO CLARA PLUS C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855942680fa5c651965.webp"
      },
      {
        "id": 182074,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CATATAU NEW 3 PTS - BCO/RS/NAT",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855776680fa5209cc87.webp"
      },
      {
        "id": 182078,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CAPELLA 4 PORTAS E 3 GAVETAS - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855943680fa5c74c974.webp"
      },
      {
        "id": 182085,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CANCUN 7P 2G - EBANO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-20/1750426283685562ab75301.webp"
      },
      {
        "id": 182086,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CANCUN 7P 2G - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-20/1750426299685562bb63f34.webp"
      },
      {
        "id": 182087,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO CANCUN 7P 2G - AREIA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855946680fa5ca1dcf8.webp"
      },
      {
        "id": 182123,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO ARIES 6 PORTAS COM ESPELHO - CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855947680fa5cb134b0.webp"
      },
      {
        "id": 182124,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO ARIES 6 PORTAS COM ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855947680fa5cbf38fb.webp"
      },
      {
        "id": 182126,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARAMOVEIS 4 PORTAS - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855948680fa5ccf2aed.webp"
      },
      {
        "id": 182128,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARAMOVEIS 4 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855949680fa5cdea848.webp"
      },
      {
        "id": 182129,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARAMOVEIS 4 PORTAS - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855950680fa5cedcccc.webp"
      },
      {
        "id": 182130,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARAMOVEIS 4 PORTAS - ATACAMA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855951680fa5cfd8d03.webp"
      },
      {
        "id": 182131,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARAMOVEIS 3 PORTAS - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855952680fa5d0e0e1e.webp"
      },
      {
        "id": 182132,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARAMOVEIS 3 PORTAS - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855954680fa5d21a733.webp"
      },
      {
        "id": 182133,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ARAMOVEIS 3 PORTAS - ATACAMA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855955680fa5d30ae41.webp"
      },
      {
        "id": 182138,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ANTARES 6 PORTAS PRIME - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855955680fa5d3e6b29.webp"
      },
      {
        "id": 182139,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ANTARES 6 PORTAS PRIME - CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855956680fa5d4df27d.webp"
      },
      {
        "id": 182141,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ANTARES 2 PORTAS DE CORRER - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855957680fa5d5db9aa.webp"
      },
      {
        "id": 182142,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO ANJOS C/ 9 GAVETAS E ESPELHO - CINAMOMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-09/174950071368474329649a2.webp"
      },
      {
        "id": 182143,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ROUPEIRO ANJOS C/ 9 GAVETAS E ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855959680fa5d7c4503.webp"
      },
      {
        "id": 182144,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ALVIN 3 PTS - NATURE / BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855777680fa521d40eb.webp"
      },
      {
        "id": 182145,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ALVIN 3 PTS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855779680fa523082da.webp"
      },
      {
        "id": 182146,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ALTO 4 PTS 2 GAV. INTERNAS C/ PES - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855960680fa5d8b8d6b.webp"
      },
      {
        "id": 182147,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO ALTO 4 PTS 2 GAV. INTERNAS C/ PES - AREIA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855961680fa5d9a0d75.webp"
      },
      {
        "id": 182153,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 8 PORTAS E 4 GAVETAS VALENCIA - ATACAMA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855962680fa5da9a59e.webp"
      },
      {
        "id": 182154,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 8 PORTAS E 4 GAVETAS VALENCIA - AREIA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855963680fa5db95516.webp"
      },
      {
        "id": 182172,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 6 PORTAS 0230 - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855964680fa5dc8726c.webp"
      },
      {
        "id": 182173,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 6 PORTAS 0230 - ATACAMA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855965680fa5dd87e47.webp"
      },
      {
        "id": 182174,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO 6 PORTAS 0230 - AREIA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855966680fa5de908d9.webp"
      },
      {
        "id": 182254,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK VINCI - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856031680fa61f9f66c.webp"
      },
      {
        "id": 182255,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK VINCI - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856032680fa620e96fc.webp"
      },
      {
        "id": 182256,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK VINCI - CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856034680fa622555c5.webp"
      },
      {
        "id": 182258,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK TITAN - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856035680fa62387c9e.webp"
      },
      {
        "id": 182259,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK TITAN - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856036680fa624e89b8.webp"
      },
      {
        "id": 182260,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK TITAN - CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856038680fa6264e56a.webp"
      },
      {
        "id": 182261,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK STAR - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856039680fa627a581f.webp"
      },
      {
        "id": 182293,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK KING - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856041680fa6291cdf9.webp"
      },
      {
        "id": 182294,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK KING - CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856042680fa62a594a9.webp"
      },
      {
        "id": 182318,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK CAYMAN - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856043680fa62ba58f8.webp"
      },
      {
        "id": 182319,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK CAYMAN - CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856044680fa62cf18d3.webp"
      },
      {
        "id": 182338,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK ARUBA -  OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856046680fa62e59263.webp"
      },
      {
        "id": 182339,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK ARUBA - CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856047680fa62fccd7d.webp"
      },
      {
        "id": 182347,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK ANDROS - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856049680fa6311aa9e.webp"
      },
      {
        "id": 182348,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK ANDROS - CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856050680fa63280b8f.webp"
      },
      {
        "id": 182349,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK ADRIA - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856051680fa633d8848.webp"
      },
      {
        "id": 182350,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK ADRIA - CEDRO / CINZA PEROLA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856053680fa63542338.webp"
      },
      {
        "id": 182354,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK + PAINEL LEGACY 2.0  - NATURE / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856057680fa6394bd98.webp"
      },
      {
        "id": 182355,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK + PAINEL LEGACY 1.6  - NATURE / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856058680fa63ace44a.webp"
      },
      {
        "id": 182356,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK + PAINEL LEGACY - NATURE / PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856060680fa63c19931.webp"
      },
      {
        "id": 182360,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "PURIFICADOR ACQUAFLEX HERMETICO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855741680fa4fdb8157.webp"
      },
      {
        "id": 182361,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "PRESS STAR SIDE BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855742680fa4feb2d58.webp"
      },
      {
        "id": 182362,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "PRATELEIRA DE AÇO 30 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855743680fa4fff079d.webp"
      },
      {
        "id": 182366,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "POLTRONA SAMOA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856028680fa61cc1968.webp"
      },
      {
        "id": 182377,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "POLTRONA RETRÔ ESTOFADA - MARROM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856030680fa61e61fcf.webp"
      },
      {
        "id": 182380,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "PES PLASTICOS PARA ROUPEIRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843868680f769c8dada.webp"
      },
      {
        "id": 182381,
        "categoria": [
          "Penteadeira"
        ],
        "nomeDoProduto": "PENTEADEIRA SOFIA + BANQUETA CANCUN ROSE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855840680fa560bc1f7.webp"
      },
      {
        "id": 182382,
        "categoria": [
          "Penteadeira"
        ],
        "nomeDoProduto": "PENTEADEIRA SOFIA + BANQUETA CANCUN OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855842680fa5622820c.webp"
      },
      {
        "id": 182383,
        "categoria": [
          "Penteadeira"
        ],
        "nomeDoProduto": "PENTEADEIRA SOFIA + BANQUETA CANCUN BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855843680fa56380918.webp"
      },
      {
        "id": 182397,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "PANELEIRO TORRE QUENTE PAOLA - CARVALHO / GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855737680fa4f907361.webp"
      },
      {
        "id": 182398,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "PANELEIRO TORRE QUENTE PAOLA - CARVALHO / BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855738680fa4fa255bb.webp"
      },
      {
        "id": 182401,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "PANELEIRO CLARA PLUS 4P 1G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855739680fa4fb64678.webp"
      },
      {
        "id": 182402,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "PANELEIRO CLARA PLUS 4P 1G - ATACAMA/BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855740680fa4fc97adc.webp"
      },
      {
        "id": 182425,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL RIO DE JANEIRO - MOCACCINO RUSTICO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855991680fa5f76091c.webp"
      },
      {
        "id": 182426,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL RIO DE JANEIRO - FREIJO / GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855992680fa5f8697f8.webp"
      },
      {
        "id": 182427,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL RIO DE JANEIRO - CANELATO RUSTICO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855993680fa5f95f97d.webp"
      },
      {
        "id": 182438,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL MASTER 2.2 C/ NICHO - CEDRO/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855994680fa5fa4ec8a.webp"
      },
      {
        "id": 182440,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL MASTER 1.8 C/ NICHO - CEDRO/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855995680fa5fb3ce28.webp"
      },
      {
        "id": 182452,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL HOME MAXI - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855996680fa5fc4c754.webp"
      },
      {
        "id": 182453,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL HOME MAXI - OFF WHITE/CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855997680fa5fd3a065.webp"
      },
      {
        "id": 182454,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL HOME MAXI - CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855998680fa5fe3157d.webp"
      },
      {
        "id": 182457,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX NEW - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855999680fa5ff2db0c.webp"
      },
      {
        "id": 182458,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX NEW - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856000680fa60029253.webp"
      },
      {
        "id": 182459,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX NEW - CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856002680fa602e8b1f.webp"
      },
      {
        "id": 182460,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL FOX NEW - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856004680fa6043ef55.webp"
      },
      {
        "id": 182461,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "Painel Fox - Nogal Acetinado",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856005680fa60596ee6.webp"
      },
      {
        "id": 182472,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL DIJON - PRETO / NATURALLE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856007680fa60708456.webp"
      },
      {
        "id": 182473,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL DIJON - OFF / WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856008680fa60865616.webp"
      },
      {
        "id": 182474,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL DIJON - NATURALE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856009680fa609b5220.webp"
      },
      {
        "id": 182475,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL DAVOS - PRETO/CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856011680fa60b2952c.webp"
      },
      {
        "id": 182486,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL AVANT 1.80 - NOGUEIRA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856012680fa60c5711f.webp"
      },
      {
        "id": 182487,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL AVANT 1.35 - NOGUEIRA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856013680fa60dc7cb2.webp"
      },
      {
        "id": 182489,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL ASTON - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856015680fa60f1259d.webp"
      },
      {
        "id": 182490,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL ARBO 2.3 C/ NICHO - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856016680fa6106528f.webp"
      },
      {
        "id": 182491,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL ARBO 2.3 C/ NICHO - CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856017680fa611d866f.webp"
      },
      {
        "id": 182493,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO TEXAS C/ CHAVE - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-24/1750780390685ac9e673b68.webp"
      },
      {
        "id": 182494,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO TEXAS C/ CHAVE - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855711680fa4df1c3e7.webp"
      },
      {
        "id": 182495,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO TEXAS C/ CHAVE - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-24/1750780427685aca0ba5a92.webp"
      },
      {
        "id": 182500,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW ARAMOVEIS - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855712680fa4e058ee5.webp"
      },
      {
        "id": 182502,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW ARAMOVEIS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855713680fa4e18d34c.webp"
      },
      {
        "id": 182503,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW ARAMOVEIS - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855714680fa4e2bbc39.webp"
      },
      {
        "id": 182504,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO NEW ARAMOVEIS - ATACAMA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855715680fa4e3ddf3b.webp"
      },
      {
        "id": 182505,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "MULTIUSO MARICA PREMIUM 2 PORTAS C/ ESPELHO - CINAMOMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855716680fa4e4d7dea.webp"
      },
      {
        "id": 182506,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "MULTIUSO MARICA PREMIUM 2 PORTAS C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855718680fa4e61b945.webp"
      },
      {
        "id": 182507,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "MULTIUSO LINCE C/ ESPELHO - TERRANO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855719680fa4e738934.webp"
      },
      {
        "id": 182508,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "MULTIUSO LINCE C/ ESPELHO - MARROCOS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855720680fa4e865dbc.webp"
      },
      {
        "id": 182509,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "MULTIUSO LINCE C/ ESPELHO - HAVANA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855721680fa4e98d1b0.webp"
      },
      {
        "id": 182510,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "MULTIUSO LINCE C/ ESPELHO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855722680fa4eac7c0b.webp"
      },
      {
        "id": 182515,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-02/175145960168652711cc7ef.webp"
      },
      {
        "id": 182516,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855725680fa4ed510f0.webp"
      },
      {
        "id": 182517,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - ACACIA MADEIRADO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855726680fa4ee94d02.webp"
      },
      {
        "id": 182518,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO BAHAMAS - ACACIA / REFLECTA BRILHO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-02/17514596206865272416541.webp"
      },
      {
        "id": 182519,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO 4 PORTAS - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855729680fa4f10129b.webp"
      },
      {
        "id": 182520,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "MULTIUSO 4 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855730680fa4f219b61.webp"
      },
      {
        "id": 182526,
        "categoria": [
          "Modulados"
        ],
        "nomeDoProduto": "MODULADO 5 PORTAS - FREIJO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855967680fa5df5ffa4.webp"
      },
      {
        "id": 182543,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA SECRET.  AÇO 1.36 MTS - FREIJO / PRETO FOSCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855795680fa53330fa1.webp"
      },
      {
        "id": 182545,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA PETRA 1.60 X 0.90 EM MADEIRA - 1.60 X 0.90",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/17460546456812adf5af74c.webp"
      },
      {
        "id": 182546,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA PETRA 1.20 X 0.80 EM MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/17460546736812ae11e0c49.webp"
      },
      {
        "id": 182548,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA PETRA 0.90 X 0.90 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/17460547556812ae6301ee1.webp"
      },
      {
        "id": 182579,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA HERA 1.60 X 0.90 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/17460548486812aec064ea9.webp"
      },
      {
        "id": 182580,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA HERA 1.20 X 0.80 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460549726812af3c14360.webp"
      },
      {
        "id": 182616,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CENTRO HOLAMBRA - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855989680fa5f584db1.webp"
      },
      {
        "id": 182617,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CENTRO - CDK / CVL",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855990680fa5f6875e9.webp"
      },
      {
        "id": 182623,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA URBAN - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855590680fa466794d1.webp"
      },
      {
        "id": 182624,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA URBAN - CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855591680fa46738f69.webp"
      },
      {
        "id": 182632,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUCCA - PRETO / CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855591680fa467dde05.webp"
      },
      {
        "id": 182633,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUCCA - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855592680fa4689db75.webp"
      },
      {
        "id": 182634,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA CITY - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855593680fa4697655d.webp"
      },
      {
        "id": 182635,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA CITY - CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855594680fa46a3b7cc.webp"
      },
      {
        "id": 182636,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA AYLA - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855595680fa46b6ae1d.webp"
      },
      {
        "id": 182653,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA BELA 0.90 X 0.90 100% MADEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460549726812af3c193fb.webp"
      },
      {
        "id": 182676,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 20.5 KG - CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855765680fa51542a58.webp"
      },
      {
        "id": 182677,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 20.5 KG  - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855766680fa5167d1d2.webp"
      },
      {
        "id": 182678,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 14 KG 127 V - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855767680fa51788da0.webp"
      },
      {
        "id": 182679,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 10 KG 127 V - CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855769680fa5194efb4.webp"
      },
      {
        "id": 182680,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 10 KG 127 V - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855770680fa51adf040.webp"
      },
      {
        "id": 182681,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "Lavadora Libell 10 kg - Cinza",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855772680fa51c1a0f3.webp"
      },
      {
        "id": 182682,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "Lavadora Libell 10 kg - Branco",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855773680fa51d156d3.webp"
      },
      {
        "id": 182692,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PAQUETA PLUS 1200 - BCO / ELMO / MONTANHA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855688680fa4c83e2e0.webp"
      },
      {
        "id": 182693,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PAQUETA 910 PLUS - LM / RIPADO / BCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855689680fa4c919c05.webp"
      },
      {
        "id": 182694,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PAQUETA 910 PLUS - LM / LM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855689680fa4c9f0052.webp"
      },
      {
        "id": 182695,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PAQUETA 910 PLUS - LM \\ CINZA SUPREMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-05/17464503036818b77f145ae.webp"
      },
      {
        "id": 182696,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PAQUETA 910 PLUS - BCO / RIPADO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855690680fa4ca9ed23.webp"
      },
      {
        "id": 182697,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PAQUETA 1200 BCO / LM / RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-05/17464504206818b7f4d1e9f.webp"
      },
      {
        "id": 182698,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PAQUETA 1200 - LM / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-28/174845473368374d4de865e.webp"
      },
      {
        "id": 182699,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PAQUETA 1200 - LM / CINZA SUPREMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-05/17464503426818b7a6b46f3.webp"
      },
      {
        "id": 182704,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT MELISSA 4 PTS 1 GAV - 1210 - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855693680fa4cda0cb0.webp"
      },
      {
        "id": 182705,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "KIT MELISSA 4 PTS 1 GAV - 1210 - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855694680fa4ce5f07c.webp"
      },
      {
        "id": 182706,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT MELIS. 4 PTS 1 GAV - 910MM - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855695680fa4cf0ae57.webp"
      },
      {
        "id": 182707,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "KIT MELIS. 4 PTS 1 GAV - 910MM - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855695680fa4cfdd5a9.webp"
      },
      {
        "id": 182726,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GOLF REFLECTA - RIPADO / ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-05/17464520786818be6e77bae.webp"
      },
      {
        "id": 182727,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GOLF REFLECTA - LM / CINZA SUPREMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-05/17464521236818be9b6e075.webp"
      },
      {
        "id": 182728,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GOLF REFLECTA - LM / ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-05/17464521436818beaf5b9ad.webp"
      },
      {
        "id": 182732,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "KIT ESPELHO TURIM/MONTANA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855759680fa50f5d208.webp"
      },
      {
        "id": 182755,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "KIT COZINHA GENOVA MADINE - RIPADO / ARENAS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855700680fa4d4814e4.webp"
      },
      {
        "id": 182756,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "KIT COZINHA GENOVA MADINE - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855701680fa4d5d9dd8.webp"
      },
      {
        "id": 182779,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT C/ 8 PÉS MADEIRA - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-19/1747659888682b2c70e449a.webp"
      },
      {
        "id": 182780,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT C/ 8 PÉS MADEIRA - PRATA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-19/1747659911682b2c87096c0.webp"
      },
      {
        "id": 182781,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT C/ 8 PÉS MADEIRA - IMBUIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-19/1747659911682b2c87038a3.webp"
      },
      {
        "id": 182782,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT C/ 8 PÉS MADEIRA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-19/1747659911682b2c87012c5.webp"
      },
      {
        "id": 182815,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "HOME VOLPI - OFF WHITE / NATURE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856061680fa63dda6d1.webp"
      },
      {
        "id": 182816,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "HOME VOLPI - NATURE / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856063680fa63f4288d.webp"
      },
      {
        "id": 182817,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "HOME VALENCIA - SAVANA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856064680fa640abbeb.webp"
      },
      {
        "id": 182818,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "HOME VALENCIA - OFF WHITE / SAVANA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856065680fa641e7915.webp"
      },
      {
        "id": 182828,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO MURANO - CEDRO NATURAL",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856019680fa6133aeeb.webp"
      },
      {
        "id": 182832,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "HOME SUSPENSO LINHARES - CAFE / RUSTICO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856067680fa64351f70.webp"
      },
      {
        "id": 182833,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "HOME SUSPENSO AVANT 1.80 C/ NICHO - NOGUEIRA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856020680fa61481eb9.webp"
      },
      {
        "id": 182903,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA MADRI C/ ARDOSIA - CRAQUEADO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855684680fa4c452f84.webp"
      },
      {
        "id": 182904,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA MADRI C/ ARDOSIA - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855685680fa4c55a967.webp"
      },
      {
        "id": 182911,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA DALVA / MARTA PLUS - LM / LM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855686680fa4c60f7e8.webp"
      },
      {
        "id": 182912,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA DALVA / MARTA PLUS - BRANCO / GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855686680fa4c6bfadf.webp"
      },
      {
        "id": 182913,
        "categoria": [
          "Fruteira"
        ],
        "nomeDoProduto": "FRUTEIRA DALVA / MARTA PLUS -  LM / BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855687680fa4c78201e.webp"
      },
      {
        "id": 182926,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO GAS 5Q MONACO PLUS PTO 20",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855675680fa4bb63e9f.webp"
      },
      {
        "id": 182927,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO GAS 5Q MONACO PLUS BCO 20",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855676680fa4bc18a8d.webp"
      },
      {
        "id": 182928,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO GAS 5BC MONACO TOP GLASS PTO 12",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855676680fa4bcccada.webp"
      },
      {
        "id": 182929,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO GAS 5BC MONACO TOP GLASS BCO 12",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855678680fa4be2afbd.webp"
      },
      {
        "id": 182930,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO GAS 4BC COLISEUM PTO S/A 12",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-28/1745850743680f917714ef9.webp"
      },
      {
        "id": 182931,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO GAS 4BC COLISEUM BCO S A 12",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855679680fa4bfe5d7c.webp"
      },
      {
        "id": 182933,
        "categoria": [
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO COOKTOP DAKO SUPREME",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855632680fa490b3afc.webp"
      },
      {
        "id": 182948,
        "categoria": [
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO 4 BOCAS TOP GLASS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855680680fa4c09dc9e.webp"
      },
      {
        "id": 182950,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO 4 BOCAS MONACO TOP GLASS PTO 12",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855681680fa4c15e4ae.webp"
      },
      {
        "id": 182951,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO 4 BOCAS MONACO TOP GLASS BCO 12",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855682680fa4c238b0a.webp"
      },
      {
        "id": 182952,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO 4 BOCAS MONACO PLUS PTO 20",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855682680fa4c2d8ed7.webp"
      },
      {
        "id": 182953,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FOGAO 4 BOCAS MONACO PLUS BCO 20",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855683680fa4c3906e8.webp"
      },
      {
        "id": 182956,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.9 MTS C/ PORTA COPO MARROM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856071680fa6473cbc0.webp"
      },
      {
        "id": 182957,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.9 MTS C/ PORTA COPO CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856072680fa6489e6d4.webp"
      },
      {
        "id": 182958,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.9 MTS C/ PORTA COPO AZUL",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856074680fa64a0f6e7.webp"
      },
      {
        "id": 182959,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.50 MTS - C/ PORTA COPO 508 BEGE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856075680fa64b5c831.webp"
      },
      {
        "id": 182960,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.5 MTS C/ PORTA COPO 502 CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856076680fa64cc4a67.webp"
      },
      {
        "id": 182961,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.5 MTS C/ PORTA COPO 504 MARROM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856078680fa64e2bd0d.webp"
      },
      {
        "id": 182962,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.5 MTS C/ PORTA COPO 512 AZUL",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856079680fa64f77f03.webp"
      },
      {
        "id": 182982,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO QUARTZO 3 MTS C\\ 3 MODULOS  - MARROM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856080680fa650beae8.webp"
      },
      {
        "id": 182985,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO QUARTZO 3 MTS C/ 3 MODULOS - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856082680fa65226ba4.webp"
      },
      {
        "id": 182986,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO QUARTZO 3 MTS C/ 3 MODULOS - BEGE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856083680fa6538ff5b.webp"
      },
      {
        "id": 182987,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO QUARTZO 3 MTS C/ 3 MODULOS - AZUL",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856084680fa654d7f5a.webp"
      },
      {
        "id": 182988,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO QUARTZO 2.5 MTS C/ 2 MODULOS - MARROM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856086680fa65637b19.webp"
      },
      {
        "id": 182989,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO QUARTZO 2.5 MTS CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856087680fa657a244c.webp"
      },
      {
        "id": 182990,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO QUARTZO 2.00 MTS MARROM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856088680fa658f16a6.webp"
      },
      {
        "id": 182991,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO QUARTZO 2 MTS C/ 2 MODULOS - CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856090680fa65a5f56b.webp"
      },
      {
        "id": 183067,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO BARCELONA 2 E 3 LUGARES - VERMELHO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856097680fa66132bd5.webp"
      },
      {
        "id": 183068,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO BARCELONA 2 E 3 LUGARES - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856098680fa662817ea.webp"
      },
      {
        "id": 183069,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO BARCELONA 2 E 3 LUGARES - MARROM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856099680fa663b2578.webp"
      },
      {
        "id": 183070,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO BARCELONA 2 E 3 LUGARES - CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856097680fa66132bd5.webp"
      },
      {
        "id": 183073,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA 2.5 MTS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856102680fa666683c1.webp"
      },
      {
        "id": 183082,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE OFFICE - NATURE / PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855745680fa5010f267.webp"
      },
      {
        "id": 183083,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE OFFICE - NATURE / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855746680fa50247e6e.webp"
      },
      {
        "id": 183084,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE OFFICE - BRANCO / NATURE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855747680fa50364ae5.webp"
      },
      {
        "id": 183100,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "ESTANTE ALTA AÇO 5 PRATELEIRAS - FREIJO / PRETO FOSCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855748680fa504b3985.webp"
      },
      {
        "id": 183101,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ESPELHO SEVILHA C/ 2 UNIDADES",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855760680fa5105bc0d.webp"
      },
      {
        "id": 183102,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ESPELHO LOTSE PORTA DE CORRER",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855761680fa51134bd8.webp"
      },
      {
        "id": 183103,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ESPELHO PARA ROUPEIRO 0.70 x 0.20",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855762680fa512c5e2b.webp"
      },
      {
        "id": 183106,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "ESPELHO GENESIS PLUS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855764680fa51401b03.webp"
      },
      {
        "id": 183123,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA OFFICE - NATURE / PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855796680fa53475eba.webp"
      },
      {
        "id": 183124,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA OFFICE - BRANCO / NATURE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855797680fa53585850.webp"
      },
      {
        "id": 183131,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA INDUSTRIAL EM AÇO COSMOS - BRANCO / PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855799680fa53707c01.webp"
      },
      {
        "id": 183132,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA EM L THOR - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855800680fa53866f85.webp"
      },
      {
        "id": 183145,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA ARIEL BRANCO LUXO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855801680fa53993b74.webp"
      },
      {
        "id": 183146,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA ARIEL - MEL/PEROLA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855802680fa53a9e5f1.webp"
      },
      {
        "id": 183147,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "ESCRIVANINHA ARIEL - ATACAMA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855803680fa53bdb681.webp"
      },
      {
        "id": 183152,
        "categoria": [
          "Infantil"
        ],
        "nomeDoProduto": "ESCORREGADOR LAIS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855780680fa5242dad9.webp"
      },
      {
        "id": 183184,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA VITÓRIA - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855636680fa4948370f.webp"
      },
      {
        "id": 183185,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA VITÓRIA  - ATACAMA / GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855637680fa4954219b.webp"
      },
      {
        "id": 183202,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA THALIA / AGATHA - LM / RIPADO / ARENAS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855637680fa495e9492.webp"
      },
      {
        "id": 183203,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA THALIA / AGATHA - LM / CINZA SUPREMO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855638680fa496a8473.webp"
      },
      {
        "id": 183204,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA THALIA / AGATHA - LM / ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-05/17464529726818c1ec891c2.webp"
      },
      {
        "id": 183205,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA SIENA 6P 1G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855640680fa49811f20.webp"
      },
      {
        "id": 183206,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA SIENA 6P 1G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855640680fa498d5f54.webp"
      },
      {
        "id": 183213,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ROMA 4P 2G - AVENA/GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855641680fa49997680.webp"
      },
      {
        "id": 183214,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ROMA 4P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855642680fa49a4e46a.webp"
      },
      {
        "id": 183216,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA RAVENA - MADEIRADO REFLECTA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855643680fa49b13ac5.webp"
      },
      {
        "id": 183217,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA RAVENA - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855643680fa49bcb4c5.webp"
      },
      {
        "id": 183232,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MONACO - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855644680fa49c7f17e.webp"
      },
      {
        "id": 183233,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MONACO - CANELATO / GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855645680fa49d52a43.webp"
      },
      {
        "id": 183238,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MILA 5P 3G- ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855646680fa49e1cb74.webp"
      },
      {
        "id": 183239,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MILA 5P 3G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855647680fa49f7e1f1.webp"
      },
      {
        "id": 183242,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MADRI 4 PEÇAS EM AÇO - TERRACOTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460538006812aaa888f20.webp"
      },
      {
        "id": 183243,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MADRI 4 PEÇAS EM AÇO - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460538006812aaa88738f.webp"
      },
      {
        "id": 183244,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MADRI 4 PEÇAS EM AÇO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460538006812aaa875eb3.webp"
      },
      {
        "id": 183245,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MADRI 4 PEÇAS EM AÇO - AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460538006812aaa8880d0.webp"
      },
      {
        "id": 183246,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA LIZ COMPACTA - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855648680fa4a08a175.webp"
      },
      {
        "id": 183252,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA JUMA 7P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855649680fa4a158756.webp"
      },
      {
        "id": 183253,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA JUMA 7P 2G - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855650680fa4a215367.webp"
      },
      {
        "id": 183254,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ISIS 5P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855650680fa4a2d3953.webp"
      },
      {
        "id": 183255,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ISIS 5P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855651680fa4a3ac616.webp"
      },
      {
        "id": 183258,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ISABELLE C/ BALCÃO 6P 2G - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855653680fa4a527744.webp"
      },
      {
        "id": 183259,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ISABELLE C/ BALCÃO 6P 2G - AVENA/GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855653680fa4a5f31d8.webp"
      },
      {
        "id": 183260,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ISABELLE C/ BALCÃO 6P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855654680fa4a6b8bbd.webp"
      },
      {
        "id": 183263,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA FUTURA / IBIZA 2.13 - MTN / GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855655680fa4a7769b8.webp"
      },
      {
        "id": 183264,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA FUTURA / IBIZA 2.13 - MTN / ARENAS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855656680fa4a82fe6a.webp"
      },
      {
        "id": 183265,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA FUTURA / IBIZA 2.13 - BCO / RIPADO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855656680fa4a8cee27.webp"
      },
      {
        "id": 183274,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA DUBAI 5P 2G - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855658680fa4aa4b5a3.webp"
      },
      {
        "id": 183287,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA CEARA 5P 1G - CANELATO/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855659680fa4ab05b9b.webp"
      },
      {
        "id": 183288,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA CEARA 5P 1G - CANELATO 3D/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855659680fa4abbc0d8.webp"
      },
      {
        "id": 183289,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA CEARA 5P 1G - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855660680fa4ac8131b.webp"
      },
      {
        "id": 183291,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA CEARA 4P 1G - CANELATO/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855661680fa4adeaf59.webp"
      },
      {
        "id": 183292,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA CEARA 4P 1G - CANELATO 3D/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855662680fa4aed4778.webp"
      },
      {
        "id": 183293,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA CEARA 4P 1G - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855663680fa4afa05fd.webp"
      },
      {
        "id": 183294,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA CEARA 4P 1G - ACACIA MADEIRADO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855664680fa4b05dfb2.webp"
      },
      {
        "id": 183295,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA CAROL 6P 1G - ATACAMA/BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855665680fa4b113ab7.webp"
      },
      {
        "id": 183299,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA BOREAL - MARROCOS / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855665680fa4b1d0581.webp"
      },
      {
        "id": 183306,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ATENAS - AVENA / GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855666680fa4b28da0e.webp"
      },
      {
        "id": 183307,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ATENAS - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855667680fa4b34d207.webp"
      },
      {
        "id": 183312,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ANGELINA PRIME FRISADA - CINAMOMO / GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855668680fa4b4d87a4.webp"
      },
      {
        "id": 183320,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALANA 3 PEÇAS AÇO - TERRACOTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460541606812ac101e481.webp"
      },
      {
        "id": 183321,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALANA 3 PEÇAS AÇO - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460541606812ac1021db5.webp"
      },
      {
        "id": 183322,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALANA 3 PEÇAS AÇO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460541606812ac1017d8d.webp"
      },
      {
        "id": 183323,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALANA 3 PEÇAS AÇO - AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460541606812ac102477a.webp"
      },
      {
        "id": 183324,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA 910 4P 1G C/ 2 PORTAS CORRER - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855669680fa4b5896c1.webp"
      },
      {
        "id": 183325,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA 910 4P 1G C/ 2 PORTAS CORRER - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855670680fa4b640c27.webp"
      },
      {
        "id": 183326,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA 1210 4P 2G C/ 2 PORTAS CORRER - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855671680fa4b707fe4.webp"
      },
      {
        "id": 183327,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA 1210 4P 1G C/ 2 PORTAS CORRER - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855671680fa4b7a66a0.webp"
      },
      {
        "id": 183328,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COOKTOP U!TOP 5 BOCAS - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855633680fa49181a3f.webp"
      },
      {
        "id": 183329,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COOKTOP TRIPLA CHAMA GAS 5Q ATLAS AGILE UP GLASS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855634680fa492548f2.webp"
      },
      {
        "id": 183337,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COOKTOP GOLD 5 BOCAS AUTOMATICO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855635680fa4931b6b1.webp"
      },
      {
        "id": 183347,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "CONJUNTO VALENÇA 0.75 C/ JUNCO - TAMPO 0.75",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/174604176868127ba8451c1.webp"
      },
      {
        "id": 183362,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "CONJUNTO MESA ATALANTA - OFF",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855705680fa4d9563f8.webp"
      },
      {
        "id": 183363,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "CONJUNTO MESA ATALANTA - NATURE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855706680fa4da9f8ec.webp"
      },
      {
        "id": 183364,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "CONJUNTO MESA ATALANTA - CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855707680fa4dbcbe03.webp"
      },
      {
        "id": 183367,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BASE + CAD. MADRI MAX 1.20 X 0.75 S/ TAMPO PT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460533466812a8e2c336a.webp"
      },
      {
        "id": 183381,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "CONJUNTO DE MESA VALENÇA JUNCO C/ 6 CAD.1.40 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/174604154968127acdcfbca.webp"
      },
      {
        "id": 183382,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "CONJUNTO DE MESA VALENÇA JUNCO C/ 4 CAD. 1.20 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/174604175468127b9aba774.webp"
      },
      {
        "id": 183390,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BASE + CAD. CROMO 0.75 X 0.75 S/ TAMPO CRAQUEADO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855708680fa4dcda3e0.webp"
      },
      {
        "id": 183391,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BASE + CAD. MESA CROMO 0.75 X 0.75 S/ TAMPO BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855710680fa4de0113f.webp"
      },
      {
        "id": 183396,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BASE + CAD. MESA BIANCA 1.40 X 0.75 S/ TAMPO PT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460528006812a6c09e50c.webp"
      },
      {
        "id": 183398,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BASE + CAD. BIANCA 1.40 X 0.75 S/ TAMPO BR",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460528006812a6c09e50c.webp"
      },
      {
        "id": 183399,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BASE + CAD. BIANCA 1.20 MTS S/ TAMPO - PT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460528106812a6cabee49.webp"
      },
      {
        "id": 183400,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BASE + CAD. BIANCA 1.20 MTS S/ TAMPO - BR",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460528106812a6cabee49.webp"
      },
      {
        "id": 183402,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BASE + CAD. BIANCA 0.75 X 0.75 S/ TAMPO - PT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460521426812a42eb5aa2.webp"
      },
      {
        "id": 183403,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BASE + CAD. BIANCA 0.75 X 0.75 S/ TAMPO - BR",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/17460521426812a42eb5aa2.webp"
      },
      {
        "id": 183411,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA VEGA 4 GAVETAS - MARROCOS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855809680fa541ddb1b.webp"
      },
      {
        "id": 183412,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA VEGA 4 GAVETAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855811680fa54343604.webp"
      },
      {
        "id": 183418,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA SKY - MEL / PEROLA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855812680fa5449688a.webp"
      },
      {
        "id": 183420,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA SKY - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855813680fa545ef3ae.webp"
      },
      {
        "id": 183421,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COMODA SKY - ATACAMA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855815680fa54794f78.webp"
      },
      {
        "id": 183426,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA SEVILHA 1P 4G C/ PORTA JÓIAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855817680fa5491f5c0.webp"
      },
      {
        "id": 183427,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COMODA SEVILHA 1P 4G C/ PORTA JÓIAS - ATACAMA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855818680fa54a8094e.webp"
      },
      {
        "id": 183428,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "COMODA SAPATEIRA ECCOS - NATURE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855819680fa54bd5a6d.webp"
      },
      {
        "id": 183429,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "COMODA SAPATEIRA ECCOS - GIANDUIA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855821680fa54da76fc.webp"
      },
      {
        "id": 183438,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA MILÃO 1P 5G - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855823680fa54f03754.webp"
      },
      {
        "id": 183439,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COMODA MILÃO 1P 5G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855824680fa550689f4.webp"
      },
      {
        "id": 183443,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA LONDRES - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855825680fa551a4bc9.webp"
      },
      {
        "id": 183444,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA LONDRES - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855826680fa552f419a.webp"
      },
      {
        "id": 183448,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA JADE 8 GAVETAS - MEL / PEROLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-20/175042554468555fc8afbc4.webp"
      },
      {
        "id": 183449,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA JADE 8 GAVETAS - CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855828680fa5544e4d9.webp"
      },
      {
        "id": 183450,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA JADE 8 GAVETAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855829680fa555a7ae1.webp"
      },
      {
        "id": 183451,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COMODA JADE 8 GAVETAS - ATACAMA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855831680fa55703581.webp"
      },
      {
        "id": 183454,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA DETROIT NEW - JEQUITIBA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855832680fa55860f4c.webp"
      },
      {
        "id": 183458,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA CATATAU NEW 3GAV - BCO/RS/NAT",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855781680fa52562010.webp"
      },
      {
        "id": 183462,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COMODA ARAMOVEIS 1 P 5G - ATACAMA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855833680fa559afae9.webp"
      },
      {
        "id": 183465,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA ALVIN - NATURE / BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855783680fa52769a89.webp"
      },
      {
        "id": 183466,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA ALVIN - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855784680fa528e0aa9.webp"
      },
      {
        "id": 183479,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "COMODA / ROUPEIRO MEGA 2 PTS - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855835680fa55b4cdee.webp"
      },
      {
        "id": 183480,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "COMODA / ROUPEIRO MEGA 2 PTS - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855836680fa55cb8832.webp"
      },
      {
        "id": 183485,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "Colchão Supreme D-20 C/ 12 cm 0.88 x 1.88",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855566680fa44eb550a.webp"
      },
      {
        "id": 183486,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "Colchão Supreme D-20 C/ 12 cm 0.78 x 1.88",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855567680fa44f6a40a.webp"
      },
      {
        "id": 183487,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "Colchão Supreme Casal D-20 C/ 12 cm 1.38 x 1.88",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855568680fa450233f4.webp"
      },
      {
        "id": 183493,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO SCALIBUR 1.38 X 1.88 X 0.25",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855568680fa450e28df.webp"
      },
      {
        "id": 183508,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO OGUE D-33 C/22 CM SOLTEIRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855569680fa451ab5a2.webp"
      },
      {
        "id": 183509,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO OGUE D-33 C/22 CM QUEEN",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855570680fa452736a4.webp"
      },
      {
        "id": 183510,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO OGUE D-33 C/22 CM CASAL",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855571680fa45321db6.webp"
      },
      {
        "id": 183516,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO MAGNETICO 34 CM SEM VIBRO QUEEN 1.58 X 1.98",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855571680fa453c3b7a.webp"
      },
      {
        "id": 183517,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO MAGNETICO 34 CM SEM VIBRO CASAL 1.38 X 1.88",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855572680fa45480fd4.webp"
      },
      {
        "id": 183518,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO MAGNETICO 34 CM COM VIBRO CASAL 1.93X 2.03",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855573680fa4553b620.webp"
      },
      {
        "id": 183519,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO MAGNETICO 34 CM C/ MASSAGEADOR QUEEN 1.58 X 1.88",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855573680fa455deaae.webp"
      },
      {
        "id": 183520,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO MAGNETICO 34 CM C/ MASSAGEADOR 1.38 X 1.88",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855574680fa456989d5.webp"
      },
      {
        "id": 183521,
        "categoria": [
          "Infantil"
        ],
        "nomeDoProduto": "COLCHÃO INFANTIL PARA BERÇO 0.60 x 1.30",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855575680fa45750097.webp"
      },
      {
        "id": 183531,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GUARDIAN D-20 CASAL 1.38 X 1.88 X 12 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855575680fa457f3cda.webp"
      },
      {
        "id": 183532,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GUARDIAN D-20 0.88 X 1.88 X 12 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855576680fa458a9772.webp"
      },
      {
        "id": 183533,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GUARDIAN D-20 0.78 X 1.88 X 12 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855577680fa45960523.webp"
      },
      {
        "id": 183534,
        "categoria": [
          "Colchão"
        ],
        "nomeDoProduto": "COLCHAO GOLD CASAL D-33 1.88 X 1.38 X 0.17 MTS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855578680fa45a1c015.webp"
      },
      {
        "id": 183538,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER EPS D-33 CASAL 1.38 C/ 17 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855578680fa45acdaca.webp"
      },
      {
        "id": 183539,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-45 SOLTEIRO 0.88 C/ 22 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855579680fa45b90278.webp"
      },
      {
        "id": 183540,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-45 QUEEN 1.58 C/ 22 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855580680fa45c7de5a.webp"
      },
      {
        "id": 183541,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-45 CASAL 1.38 C/ 22 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855581680fa45d3ab95.webp"
      },
      {
        "id": 183542,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 SOLTEIRO 0.88 C/ 17 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855581680fa45de4a0b.webp"
      },
      {
        "id": 183543,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 SOLTEIRO 0.88 C/ 14 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855582680fa45e9ad4f.webp"
      },
      {
        "id": 183544,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 SOLTEIRO 0.78 C/ 17 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855583680fa45f5243e.webp"
      },
      {
        "id": 183545,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 SOLTEIRO 0.78 C/ 14 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855584680fa460056bd.webp"
      },
      {
        "id": 183546,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 - 1.38 X 1.88 X 14 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855584680fa460ab2ae.webp"
      },
      {
        "id": 183568,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO 1.38 D-65 PREMIUM C/ 34 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855585680fa46161a15.webp"
      },
      {
        "id": 183571,
        "categoria": [
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR AR CLIN 70 LITROS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855596680fa46c2a574.webp"
      },
      {
        "id": 183572,
        "categoria": [
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR 125 LITROS CLIN",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855596680fa46cd56ae.webp"
      },
      {
        "id": 183573,
        "categoria": [
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR  AR CLIN 80 LITROS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855597680fa46d9ae63.webp"
      },
      {
        "id": 183574,
        "categoria": [
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR  AR CLIN 60 LITROS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855598680fa46e4eb42.webp"
      },
      {
        "id": 183575,
        "categoria": [
          "Ferramentas"
        ],
        "nomeDoProduto": "CINTA DE AMARRAÇÃO PARA CARGA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855758680fa50e4200b.webp"
      },
      {
        "id": 183580,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA SOLTEIRO ADESIVADA INFANTIL",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855557680fa445214b8.webp"
      },
      {
        "id": 183581,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA JUVENIL ADESIVADA INFANTIL",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855557680fa445d7b22.webp"
      },
      {
        "id": 183585,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA CASAL CLARA - FREIJO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855558680fa4469ae1d.webp"
      },
      {
        "id": 183586,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA CARRO SOLTEIRO - VERMELHO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855786680fa52a18a0a.webp"
      },
      {
        "id": 183601,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA BELICHE LAIS C/ ESCORREGADOR",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843884680f76acba52d.webp"
      },
      {
        "id": 183604,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA AUXILIAR 0.90 ELEGANZA NATURE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855559680fa4474865f.webp"
      },
      {
        "id": 183605,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA AUXILIAR 0.90 ELEGANZA JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855560680fa44801fa1.webp"
      },
      {
        "id": 183606,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA AUXILIAR 0.90 ELEGANZA BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855560680fa448bb15e.webp"
      },
      {
        "id": 183607,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CAMA ACOPLADA SOLTEIRO - 5 cm",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843872680f76a034d19.webp"
      },
      {
        "id": 183610,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA TUBOLAR AVULSA - OURO ENVELHECIDO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/1746044153681284f92d70f.webp"
      },
      {
        "id": 183611,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA TUBOLAR AVULSA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/1746044153681284f9257b1.webp"
      },
      {
        "id": 183621,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA ESTOFADA ALBERTO VELUDO 406 - COR 07 CX C/ 2 - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843869680f769d79509.webp"
      },
      {
        "id": 183622,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CAD. EST. ALBERTO VELUDO n 22 CX C/ 2 MARROM CLARO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/1746027447681243b775ea3.webp"
      },
      {
        "id": 183623,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA ALBERTO VELUDO. COR 14 C/ 2MARROM ESCURO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/1746027749681244e511c66.webp"
      },
      {
        "id": 183625,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA ESTOFADA ALBERTO LINHO 303 - COR 07",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-30/1746027824681245302c505.webp"
      },
      {
        "id": 183635,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CABECEIRA CONDESSA 1.95 MTS - CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843891680f76b367af7.webp"
      },
      {
        "id": 183636,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CABECEIRA CONDESSA 1.60 MTS - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843892680f76b42ddb6.webp"
      },
      {
        "id": 183637,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CABECEIRA CONDESSA 1.60 MTS - MARROM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843892680f76b4e7bb8.webp"
      },
      {
        "id": 183639,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CABECEIRA CONDESSA 1.40 MTS - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843893680f76b5ad799.webp"
      },
      {
        "id": 183640,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "CABECEIRA CONDESSA 1.40 MTS - MARROM CLARO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843894680f76b6b9ff0.webp"
      },
      {
        "id": 183688,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET AÇORES LUXO - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855978680fa5ead955b.webp"
      },
      {
        "id": 183694,
        "categoria": [
          "Bicicleta"
        ],
        "nomeDoProduto": "BICICLETA MINI BOY - ARO 12",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855751680fa5071aef7.webp"
      },
      {
        "id": 183695,
        "categoria": [
          "Bicicleta"
        ],
        "nomeDoProduto": "BICICLETA MERCURY ARO 29 - VERMELHO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855752680fa508496d2.webp"
      },
      {
        "id": 183696,
        "categoria": [
          "Bicicleta"
        ],
        "nomeDoProduto": "BICICLETA MERCURY ARO 29 - PRATA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855753680fa5097b3c1.webp"
      },
      {
        "id": 183697,
        "categoria": [
          "Bicicleta"
        ],
        "nomeDoProduto": "BICICLETA FOXER HAMMER ARO 26 - VERMELHO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855754680fa50ab1cb9.webp"
      },
      {
        "id": 183698,
        "categoria": [
          "Bicicleta"
        ],
        "nomeDoProduto": "BICICLETA FOXER HAMMER ARO 26 - PRETA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855755680fa50bea65d.webp"
      },
      {
        "id": 183699,
        "categoria": [
          "Bicicleta"
        ],
        "nomeDoProduto": "BICICLETA FOXER HAMMER ARO 26 - AZUL",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855757680fa50d10107.webp"
      },
      {
        "id": 183700,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BICAMA SOLTEIRO C/ AUXILIAR",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843873680f76a11e652.webp"
      },
      {
        "id": 183701,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BERÇO MINICAMA SONINHO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855787680fa52b3e71a.webp"
      },
      {
        "id": 183702,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BERÇO MINICAMA SONINHO - AMADEIRADO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855788680fa52c27844.webp"
      },
      {
        "id": 183703,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BERÇO MINICAMA CATATAU NEW - NATURE / BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855789680fa52d5d582.webp"
      },
      {
        "id": 183704,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BERÇO MINI-CAMA ALVIN - NATURE / BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855790680fa52ea5b9b.webp"
      },
      {
        "id": 183705,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BERÇO MINI-CAMA ALVIN - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855792680fa53008374.webp"
      },
      {
        "id": 183710,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BELICHE TORNEADA PALMO 80 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843885680f76ad892d0.webp"
      },
      {
        "id": 183711,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BELICHE PRISMA PLUS BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843886680f76ae5cccb.webp"
      },
      {
        "id": 183712,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BELICHE GOLD & SILVER",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843887680f76af7a009.webp"
      },
      {
        "id": 183713,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BELICHE FLORIPA JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843888680f76b04eb92.webp"
      },
      {
        "id": 183714,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BELICHE FLORIPA BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843889680f76b112166.webp"
      },
      {
        "id": 183715,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BELICHE ABSOLUT JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843889680f76b1da8ec.webp"
      },
      {
        "id": 183716,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BELICHE ABSOLUT BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843890680f76b296c53.webp"
      },
      {
        "id": 183717,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BASE PARA CAMA SOLTEIRO EM SUEDE - CORES VARIADAS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843876680f76a42b605.webp"
      },
      {
        "id": 183719,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BASE PARA CAMA SOLTEIRO 0.78 EM SUEDE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843876680f76a4da223.webp"
      },
      {
        "id": 183720,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BASE PARA CAMA QUEEN EM SUEDE - CORES VARIADAS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843877680f76a593394.webp"
      },
      {
        "id": 183721,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BASE PARA CAMA KING SIZE - 1.93 X 2.03 X 0.30",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843878680f76a69f013.webp"
      },
      {
        "id": 183723,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BASE PARA CAMA CASAL SCALIBUR - 1.38 X 1.88",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843879680f76a777658.webp"
      },
      {
        "id": 183724,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BASE PARA CAMA CASAL EM SUEDE - CORES VARIADAS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843880680f76a8d83c2.webp"
      },
      {
        "id": 183733,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE BAU SOLTEIRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843881680f76a991b0f.webp"
      },
      {
        "id": 183734,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE BAU LIGHT SUEDE AMASSADO - 1.38 X 188 X 0.35",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843882680f76aa4a17d.webp"
      },
      {
        "id": 183735,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE BAU 1.93 MTS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843883680f76ab28e33.webp"
      },
      {
        "id": 183736,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE BAU 1.58 MTS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843883680f76abe5689.webp"
      },
      {
        "id": 183746,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE + COLCHÃO SUPER QUEEN MERCURIO C/ MOLAS POCKET - 1.93 X 1.98 X 0.45",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855561680fa4497af78.webp"
      },
      {
        "id": 183748,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE + COLCHÃO QUEEN MERCURIO C/ MOLAS POCKET - 1.58 X 1.98 X 0.56",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855562680fa44a3cecf.webp"
      },
      {
        "id": 183751,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE + COLCHÃO MERCURY SOLTEIRO 0.88",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855562680fa44af0935.webp"
      },
      {
        "id": 183752,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE + COLCHÃO GOLD POCKET 1.38 X 1.88",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855563680fa44bab6bf.webp"
      },
      {
        "id": 183753,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE + COLCHÃO CASAL D-33 C/ 22 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-05/17464662426818f5c2d455f.webp"
      },
      {
        "id": 183754,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE + COLCHÃO C/ MOLAS POCKET MERCURY SOLTEIRÃO - ( 1.08 X 1.88 X 0.56 )",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855565680fa44d4c0f5.webp"
      },
      {
        "id": 183755,
        "categoria": [
          "Base"
        ],
        "nomeDoProduto": "BASE+COLCHÃO  POCKET MERCURIO 1.38 X1.88 X0.56",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855566680fa44e0f80a.webp"
      },
      {
        "id": 183783,
        "categoria": [
          "Bancada"
        ],
        "nomeDoProduto": "BANCADA LAVANDA - PRETO CHUMBO / NATURE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855986680fa5f2a24d7.webp"
      },
      {
        "id": 183784,
        "categoria": [
          "Bancada"
        ],
        "nomeDoProduto": "BANCADA LAVANDA - OFF WHITE / NATURE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855987680fa5f38749b.webp"
      },
      {
        "id": 183801,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO SLIM 1P - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855605680fa4756301a.webp"
      },
      {
        "id": 183839,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "BALCÃO MULTIUSO HAVANA NEW - MADEIRADO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855606680fa47612bc6.webp"
      },
      {
        "id": 183840,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "BALCÃO MULTIUSO HAVANA NEW - MADEIRADO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855606680fa47612bc6.webp"
      },
      {
        "id": 183841,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "BALCÃO MULTIUSO HAVANA NEW - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855607680fa47753ef8.webp"
      },
      {
        "id": 183855,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BALCÃO JUMA 2 PORTAS E 2 GAVETAS - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855608680fa4781bc49.webp"
      },
      {
        "id": 183856,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BALCÃO JUMA 2 PORTAS E 2 GAVETAS - ATACAMA / GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855608680fa478d02d9.webp"
      },
      {
        "id": 183876,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP MUNIQUE - OFF WHITE / CANELATO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855609680fa479872cf.webp"
      },
      {
        "id": 183878,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP MUNIQUE - MADEIRADO / PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855610680fa47a3c346.webp"
      },
      {
        "id": 183879,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP E FORNO MADRI - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855610680fa47af2559.webp"
      },
      {
        "id": 183880,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP E FORNO MADRI - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855611680fa47bc58ba.webp"
      },
      {
        "id": 183881,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP E FORNO MADRI - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855612680fa47c889ac.webp"
      },
      {
        "id": 183883,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G TAMPO VAZADO - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855613680fa47d607f8.webp"
      },
      {
        "id": 183884,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G TAMPO VAZADO - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855614680fa47e39dd1.webp"
      },
      {
        "id": 183885,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G TAMPO VAZADO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855615680fa47f0352a.webp"
      },
      {
        "id": 183886,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G C/ TAMPO FECHADO - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855615680fa47fc40df.webp"
      },
      {
        "id": 183887,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G C/ TAMPO FECHADO - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855616680fa4808aac4.webp"
      },
      {
        "id": 183888,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G C/ TAMPO FECHADO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855617680fa48152c00.webp"
      },
      {
        "id": 183889,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.20 GOLD 2P 3G C/ TAMPO - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855618680fa4821e6cd.webp"
      },
      {
        "id": 183890,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.05 GOLD 1P 1G - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855618680fa482de02c.webp"
      },
      {
        "id": 183891,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.05 GOLD 1P 1G - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855619680fa483bf0a0.webp"
      },
      {
        "id": 183892,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 1.05 GOLD 1P 1G - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855620680fa48497792.webp"
      },
      {
        "id": 183893,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 0.80 GOLD 2P - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855621680fa48561dd3.webp"
      },
      {
        "id": 183894,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 0.80 GOLD 2P - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855622680fa4862ced2.webp"
      },
      {
        "id": 183895,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO COOKTOP 0.80 GOLD 2P - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855622680fa486ef184.webp"
      },
      {
        "id": 183897,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BALCÃO CLARA PLUS 3P 2G - ATACAMA/OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855623680fa487b9908.webp"
      },
      {
        "id": 183898,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BALCÃO CLARA PLUS 3P 2G - ATACAMA/GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-31/1748697669683b02457d62d.webp"
      },
      {
        "id": 183899,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BALCÃO CLARA PLUS 3P 2G - ATACAMA/BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-31/1748697692683b025c103f2.webp"
      },
      {
        "id": 183914,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855626680fa48a03383.webp"
      },
      {
        "id": 183915,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855626680fa48ab4731.webp"
      },
      {
        "id": 183916,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO 1.40 P/ COOKTOP 5 BOCAS - JEQUITIBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855627680fa48b78e66.webp"
      },
      {
        "id": 183933,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "ARM. MULTIUSO 1.83 MTS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855731680fa4f346fe4.webp"
      },
      {
        "id": 183934,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "ARM. MULTIUSO 1.83 M - EBANO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855732680fa4f462eca.webp"
      },
      {
        "id": 183935,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "ARM. MULTIUSO 1.83 M - ATACAMA / OFF-WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855733680fa4f59127d.webp"
      },
      {
        "id": 183936,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "ARM. MULTIUSO 1.83 M - ATACAMA / GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855734680fa4f6c64d9.webp"
      },
      {
        "id": 183937,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "ARM. MULTIUSO 1.83 M - ATACAMA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855735680fa4f7eb6cf.webp"
      },
      {
        "id": 183955,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "AÉREO BASCULANTE COZINHA VIENA - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855599680fa46f110c7.webp"
      },
      {
        "id": 183957,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "AEREO BASCULANTE COZINHA VIENA - CARVALHO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855599680fa46fc4776.webp"
      },
      {
        "id": 183964,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "AEREO PAOLA 1 PORTA 0.80 MTS - CARVALHO / BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855600680fa47076c64.webp"
      },
      {
        "id": 183988,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "AEREO 1.20 MTS C/ VIDRO PAOLA - CARVALHO / BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855601680fa47132b2a.webp"
      },
      {
        "id": 183990,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "ACOPLADO SOLTEIRO 10 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843873680f76a1dce77.webp"
      },
      {
        "id": 183991,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "ACOPLADO CASAL 5 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843874680f76a2a01f7.webp"
      },
      {
        "id": 183993,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "Acoplado Casal 10 cm",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745843875680f76a35b7ba.webp"
      },
      {
        "id": 183997,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "911 - KIT COZINHA LORY ATACAMA / PRETO FOSCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855703680fa4d7087a9.webp"
      },
      {
        "id": 183998,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "910 COZINHA LORY ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855704680fa4d82ccdf.webp"
      },
      {
        "id": 185429,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET CRETA 4 PORTAS - CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855980680fa5eccbea8.webp"
      },
      {
        "id": 185430,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET CRETA 4 PORTAS - OFF / CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855981680fa5edbe7fb.webp"
      },
      {
        "id": 185431,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET CRETA 4 PORTAS - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855982680fa5eebc04d.webp"
      },
      {
        "id": 185443,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET MAGNUM EDN 0.90 -OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855983680fa5efc8717.webp"
      },
      {
        "id": 185444,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO 3 PTS 1 GAVETAS - GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-31/1748697637683b0225ba529.webp"
      },
      {
        "id": 185445,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BALCÃO 3 PTS 1 GAVETAS - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-31/1748697644683b022ccd659.webp"
      },
      {
        "id": 185446,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BALCÃO ATENAS 3 PTS 1 GAV - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855629680fa48d8def1.webp"
      },
      {
        "id": 185447,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BALCÃO ISABELLE - ATACAMA / GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855630680fa48e4bd79.webp"
      },
      {
        "id": 185448,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BALCÃO ISABELLE - ATACAMA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855630680fa48ef2734.webp"
      },
      {
        "id": 185449,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "AÉREO MICROONDAS COZINHA VIENA - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855601680fa471d3bc0.webp"
      },
      {
        "id": 185450,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "AÉREO GELADEIRA COZINHA PARIS - GRAFITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855602680fa472915ee.webp"
      },
      {
        "id": 185451,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "AÉREO ATHENA 80 - ITAUBA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855603680fa47346619.webp"
      },
      {
        "id": 185452,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "AEREO 80 ATHENA - ITAUBA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855603680fa473e66dd.webp"
      },
      {
        "id": 185453,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "AEREO PEROLA C/ NICHO - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855604680fa47497dd3.webp"
      },
      {
        "id": 185454,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHONETE 0.60 X 1.80 X 0.04 CM",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855586680fa462187e1.webp"
      },
      {
        "id": 185455,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO SINGLE MOLA POCKET PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855586680fa462d0ccf.webp"
      },
      {
        "id": 185456,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD COM MOLA POCKET MONTREAL",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855587680fa463a0609.webp"
      },
      {
        "id": 185457,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO SILVER COM MOLA POCKET MONTREAL",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855588680fa46456f98.webp"
      },
      {
        "id": 185481,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO C/ MOLAS MERCÚRIO SOLTEIRÃO 1.08 X 1.88",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855589680fa465150d9.webp"
      },
      {
        "id": 185482,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO C/ MOLAS MERCURIO CASAL 1.38 X 1.88",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855589680fa465bb3a1.webp"
      },
      {
        "id": 185493,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO TRIPOLI 2 PORTAS - CASTANHO USINADO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855968680fa5e0740bd.webp"
      },
      {
        "id": 185498,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MONTECARLO 100% MDF - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855969680fa5e15f8fa.webp"
      },
      {
        "id": 185499,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO GLIESE 6 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855970680fa5e24d344.webp"
      },
      {
        "id": 185500,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 4 PORTAS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855971680fa5e342679.webp"
      },
      {
        "id": 185502,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. CANADA 6 PORTAS 8 GAV. - CIN. / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855973680fa5e5229c3.webp"
      },
      {
        "id": 185504,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO VILA VELHA - ACACIA MADEIRADO / REFLECTA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855974680fa5e61149d.webp"
      },
      {
        "id": 185505,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MALIBU NEW 6 PTS - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855975680fa5e710dfe.webp"
      },
      {
        "id": 185506,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO MALIBU NEW 6 PTS - JEQUITIBA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855975680fa5e7eb02f.webp"
      },
      {
        "id": 185507,
        "categoria": [
          "Fogão"
        ],
        "nomeDoProduto": "FOGÃO COOKTOP GOLD 5 BOCAS - SIMPLES",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855635680fa493c48d0.webp"
      },
      {
        "id": 185508,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO LUGANO 6 PORTAS - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855976680fa5e8f392f.webp"
      },
      {
        "id": 185509,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO LUGANO 6 PORTAS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855976680fa5e8f392f.webp"
      },
      {
        "id": 185512,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA ANTARES CASA D - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855837680fa55df062b.webp"
      },
      {
        "id": 185513,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA ANTARES CASA D - VERDE OLIVA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855839680fa55f62875.webp"
      },
      {
        "id": 185514,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA FLOCOS",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855793680fa53134f7e.webp"
      },
      {
        "id": 185515,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO FLOCOS - RANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855794680fa5320642b.webp"
      },
      {
        "id": 185516,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "BALCÃO EMILY - ATACAMA  OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855632680fa4900a7f3.webp"
      },
      {
        "id": 185517,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK LEGACY 2.0 - OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856054680fa63688e25.webp"
      },
      {
        "id": 185519,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "HOME AVANT 1.40 MTS C/ NICHO - NOGUEIRA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856021680fa615cb826.webp"
      },
      {
        "id": 185520,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL AREZZO - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856023680fa61729ded.webp"
      },
      {
        "id": 185521,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "HOME ALEXANDRIA SAL MOVELARIA - OFF / IPE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856068680fa644a0193.webp"
      },
      {
        "id": 185522,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL SOTILE - NATURE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856024680fa6187d061.webp"
      },
      {
        "id": 185523,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL SAQUAREMA - NATURE / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856026680fa61a27454.webp"
      },
      {
        "id": 185524,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL SAQUAREMA - OFF WHITE / NATURE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856027680fa61b6d14d.webp"
      },
      {
        "id": 185525,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "BANCADA PARATY 100% MDF - SAVANA / OFF WHITE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855988680fa5f49b92c.webp"
      },
      {
        "id": 185526,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.9 MTS C/ PORTA COPO BEGE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856105680fa6693a057.webp"
      },
      {
        "id": 185527,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 14 KG 220 V - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855774680fa51e44e78.webp"
      },
      {
        "id": 185528,
        "categoria": [
          "Lavadora"
        ],
        "nomeDoProduto": "LAVADORA LIBELL 14 KG 220 V - CINZA",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855775680fa51f6380b.webp"
      },
      {
        "id": 185529,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA INDUSTRIAL 3 PRATELEIRAS EM AÇO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855805680fa53d216dc.webp"
      },
      {
        "id": 185537,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET ANDORRA 1.72 CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855984680fa5f0b46a1.webp"
      },
      {
        "id": 185538,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET ANDORRA 1.72 OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855985680fa5f1a57ba.webp"
      },
      {
        "id": 185539,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK COMODORO 2.20 EDN OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856055680fa637d7b35.webp"
      },
      {
        "id": 185541,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO QUARTZO 3 MTS C\\ 3 MODULOS - PRETO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856107680fa66bdaeca.webp"
      },
      {
        "id": 185543,
        "categoria": [
          "Penteadeira"
        ],
        "nomeDoProduto": "PENTEADEIRA GOLD C/ LED - BRANCO",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855844680fa564caa0c.webp"
      },
      {
        "id": 185544,
        "categoria": [
          "Penteadeira"
        ],
        "nomeDoProduto": "PENTEADEIRA GOLD C/ LED - ROSE",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745855846680fa566174e8.webp"
      },
      {
        "id": 189422,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "POLTRONA RETRÔ ESTOFADA - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/1746026978681241e23f0a8.webp"
      },
      {
        "id": 189423,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "POLTRONA VINTAGE C/ TECIDO EM LINHO - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/174602701168124203ca7d6.webp"
      },
      {
        "id": 189457,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BASE + CAD. BRUNA 6 CAD. S/ TAMPO 1.40 MTS - BR",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-04-30/1746044323681285a31ad48.webp"
      },
      {
        "id": 189538,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT. COZ LEBLON MADINE - LM/ CINZA SUPREMO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-05/17464510626818ba7620311.webp"
      },
      {
        "id": 189539,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT. COZ LEBLON MADINE - LM /RIPADO /ARENAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-05/17464514676818bc0b9f104.webp"
      },
      {
        "id": 189540,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO DENISE 700 2 PORTAS - MTN / BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-05/17464517686818bd38992fc.webp"
      },
      {
        "id": 189541,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO 2 PTS 3 GAV. DENISE - MTN / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-05/17464517826818bd46050bb.webp"
      },
      {
        "id": 189604,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FORNO ELETRICO 48 LITROS C/ ROTISSEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-09/1746814113681e44a1e0e00.webp"
      },
      {
        "id": 189605,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FORNO ELETRICO 60 LITROS C/ ROTISSEIRA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-09/1746813703681e43076f17e.webp"
      },
      {
        "id": 189606,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA EAMES BEST - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-09/1746813806681e436e98cbb.webp"
      },
      {
        "id": 192291,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 6 PORTAS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-10/1746882307681f4f034704f.webp"
      },
      {
        "id": 192292,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO SÃO LUIS 4 PORTAS - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-10/1746882827681f510bbb1bc.webp"
      },
      {
        "id": 192293,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO DE CANTO LARISSA - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-10/1746887267681f626335b1c.webp"
      },
      {
        "id": 192294,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO DE CANTO LARISSA - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-10/1746887348681f62b4b6118.webp"
      },
      {
        "id": 192295,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO DE CANTO LARISSA - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-10/1746887494681f63461f843.webp"
      },
      {
        "id": 192296,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO BARCELONA 2 E 3 LUGARES - BEGE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461372966813f0d00477d.webp"
      },
      {
        "id": 192297,
        "categoria": [
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR AR CLIN 35 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-10/1746889199681f69efc0bf6.webp"
      },
      {
        "id": 202893,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ANGELINA PRIME FRISADA - CINAMOMO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-04-24/1745525617680a9b719e87c.webp"
      },
      {
        "id": 202907,
        "categoria": [
          "Eletrônicos"
        ],
        "nomeDoProduto": "BOOMBOX H'MASTON TN41",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-16/1747404116682745546623a.webp"
      },
      {
        "id": 202908,
        "categoria": [
          "Eletrônicos"
        ],
        "nomeDoProduto": "CAIXA DE SOM H´MASTON TN07",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-16/17474040766827452cc42a2.webp"
      },
      {
        "id": 202909,
        "categoria": [
          "Eletrônicos"
        ],
        "nomeDoProduto": "CAIXA DE SOM JBL GO3",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-16/1747404243682745d399363.webp"
      },
      {
        "id": 202911,
        "categoria": [
          "Eletrônicos"
        ],
        "nomeDoProduto": "FONE DE OUVIDO i12  TWS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-16/1747404759682747d77b37c.webp"
      },
      {
        "id": 202912,
        "categoria": [
          "Eletrônicos"
        ],
        "nomeDoProduto": "CABO CARREGADOR H'MASTON H72-2 4.8 MAX",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-16/1747405046682748f66e97c.webp"
      },
      {
        "id": 202913,
        "categoria": [
          "Eletrônicos"
        ],
        "nomeDoProduto": "CABO CARREGADOR H'MASTON H72-3 4.8 MAX",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-16/17474051146827493a43454.webp"
      },
      {
        "id": 202914,
        "categoria": [
          "Eletrônicos"
        ],
        "nomeDoProduto": "CARREGADOR H'MASTON Y37-1 4.8V",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-16/174740568568274b75e1c10.webp"
      },
      {
        "id": 202915,
        "categoria": [
          "Eletrônicos"
        ],
        "nomeDoProduto": "CARREGADOR H'MASTON Y37-2 4.8V",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-16/17474040766827452cc79e6.webp"
      },
      {
        "id": 202917,
        "categoria": [
          "Eletrônicos"
        ],
        "nomeDoProduto": "CARREGADOR H'MASTON Y52-3 4.8V",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-16/174740568568274b75dec64.webp"
      },
      {
        "id": 202918,
        "categoria": [
          "Eletrônicos"
        ],
        "nomeDoProduto": "CABO CARREGADOR T COLORIDO - iPHONE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-16/174740614368274d3f5ac7f.webp"
      },
      {
        "id": 202919,
        "categoria": [
          "Eletrônicos"
        ],
        "nomeDoProduto": "CABO CARREGADOR T COLORIDO - V8",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-16/174740623768274d9d43a1c.webp"
      },
      {
        "id": 202921,
        "categoria": [
          "Eletrônicos"
        ],
        "nomeDoProduto": "CABO CARREGADOR T COLORIDO - TIPO C",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-16/174740628968274dd17ba41.webp"
      },
      {
        "id": 202986,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO D-60 PREMIUM BORDADO 1.38 MTS - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-19/1747682782682b85deacc00.webp"
      },
      {
        "id": 202987,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO D-60 PREMIUM BORDADO 1.38 MTS - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-19/1747682782682b85deaf877.webp"
      },
      {
        "id": 202989,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO D-60 OMEGA BORDADO 1.38 MTS - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747683289682b87d9454cb.webp"
      },
      {
        "id": 202990,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO D-60 OMEGA BORDADO 1.38 MTS - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747683205682b8785d9b29.webp"
      },
      {
        "id": 202991,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO D-60 OMEGA QUEEN BORD. 1.58 MTS - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747683354682b881a7bc90.webp"
      },
      {
        "id": 202993,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO D-60 OMEGA QUEEN BORD. 1.58 MTS - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-19/1747683374682b882e32926.webp"
      },
      {
        "id": 202996,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO D-60 PREMIUM QUEEN BORD. 1.58 MTS - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-19/1747682782682b85deb12b3.webp"
      },
      {
        "id": 202997,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO D-60 PREMIUM QUEEN BORD. 1.58 MTS - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-19/1747682782682b85deaf877.webp"
      },
      {
        "id": 204380,
        "categoria": [
          "Climatizador"
        ],
        "nomeDoProduto": "CLIMATIZADOR AR CLIN 16 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-20/1747774785682ced4120c5d.webp"
      },
      {
        "id": 204392,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FRITADEIRA AIR FRYER TRONOS 3 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-21/1747864417682e4b61ade4c.webp"
      },
      {
        "id": 204393,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "FRITADEIRA AIR FRYER TRONOS 12 LITROS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-21/1747864496682e4bb0a8284.webp"
      },
      {
        "id": 204394,
        "categoria": [
          "Eletrônicos"
        ],
        "nomeDoProduto": "HEADPHONE GAMER BRAZILPC C/ MICROFONE RGB",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-21/1747864379682e4b3bf37b2.webp"
      },
      {
        "id": 204395,
        "categoria": [
          "Eletrônicos"
        ],
        "nomeDoProduto": "MOUSE USB OPTICO BRAZILPC BPC-M129",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-21/1747864783682e4ccfc7b5e.webp"
      },
      {
        "id": 204396,
        "categoria": [
          "Ombrelone"
        ],
        "nomeDoProduto": "OMBRELONE LATERAL TRONOS 3 METROS AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-21/1747864820682e4cf404bdb.webp"
      },
      {
        "id": 204397,
        "categoria": [
          "Ombrelone"
        ],
        "nomeDoProduto": "OMBRELONE LATERAL TRONOS 3 METROS BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-21/1747864854682e4d167b88e.webp"
      },
      {
        "id": 204398,
        "categoria": [
          "Eletrônicos"
        ],
        "nomeDoProduto": "TECLADO USB BRAZILPC BPC-8236",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-21/1747864953682e4d798b6e6.webp"
      },
      {
        "id": 204399,
        "categoria": [
          "TV"
        ],
        "nomeDoProduto": "SMART TV TRONOS ''55'' POLEGADAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-21/1747865562682e4fda774b6.webp"
      },
      {
        "id": 204403,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "BASE + CAD. MESA BIANCA 1.80 X 0.75 S/ TAMPO PT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-21/1747868765682e5c5d5ad78.webp"
      },
      {
        "id": 204437,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO QUEEN MERCURIO POCKET 1.58 X1.98 X 0.45",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-26/17482691956834788b66b7e.webp"
      },
      {
        "id": 204438,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO SOLTEIRO MERCURIO POCKET 0,88 X1.88 X 0.45",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-26/174826931668347904ec7e2.webp"
      },
      {
        "id": 204462,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA MALIBU NEW - NATURE/ OFF WHITE RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-28/174845463168374ce7873d7.webp"
      },
      {
        "id": 204463,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA TAURUS EM L - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-28/174845492168374e092321d.webp"
      },
      {
        "id": 204465,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA TAURUS EM L - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-28/174845498568374e49451e1.webp"
      },
      {
        "id": 204466,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA TAURUS EM L - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-28/174845504268374e8232f07.webp"
      },
      {
        "id": 204467,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA TAURUS 1.20 MTS - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-28/174845520868374f286fd0b.webp"
      },
      {
        "id": 204468,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA THOR 1.20 MTS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-28/17484554346837500a27aee.webp"
      },
      {
        "id": 204469,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA THOR 1.20 MTS - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-28/174845557468375096b8031.webp"
      },
      {
        "id": 204471,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA THOR 1.20 MTS - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-28/1748455650683750e298e7d.webp"
      },
      {
        "id": 204997,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GOLDEN 6 PORTAS - FREIJO / SOFT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642447683a2a8f3d88f.webp"
      },
      {
        "id": 204998,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GOLDEN 6 PORTAS - FREIJO / GRIS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642454683a2a9643776.webp"
      },
      {
        "id": 204999,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GOLDEN 6 PORTAS - NOGUEIRA / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642461683a2a9d96637.webp"
      },
      {
        "id": 205000,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT GENOVA KIT´S PARANA 6 PORTAS - NOGUEIRA / OFF RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642607683a2b2f03593.webp"
      },
      {
        "id": 205001,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT CORE 8 PORTAS - FREIJO / NERO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642748683a2bbc011da.webp"
      },
      {
        "id": 205002,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT CORE 8 PORTAS - FREIJO / VANILLA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748642753683a2bc1c51f7.webp"
      },
      {
        "id": 205003,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT APOLO 6 PORTAS - FREIJO / SOFT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643014683a2cc60f517.webp"
      },
      {
        "id": 205004,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT APOLO 6 PORTAS - FREIJO / GRIS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643020683a2ccccbc10.webp"
      },
      {
        "id": 205005,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA FERRARA PLUS - FREIJO / SUPREMO RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643183683a2d6f6d29f.webp"
      },
      {
        "id": 205006,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA FERRARA PLUS - FREIJO / SOFT",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-30/1748643193683a2d7905889.webp"
      },
      {
        "id": 205008,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO LIVING LIFE 2.0 MTS BEM ESTAR",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-30/1748644107683a310b9bf2f.webp"
      },
      {
        "id": 205009,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO ATENAS 3 PTS 1 GAV - AVENA/ GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-31/1748694827683af72bf0d01.webp"
      },
      {
        "id": 205100,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO LAUS PRIME 2.00 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-04/17490708716840b4177d768.webp"
      },
      {
        "id": 205103,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO LAUS PRIME 2.50 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-04/17490711566840b5348f371.webp"
      },
      {
        "id": 205104,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO LAUS PRIME 2.90 MTS C/ 3 MODULOS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-04/17490712726840b5a85a358.webp"
      },
      {
        "id": 205105,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ZEUS 2.0 MTS C/ PORTA COPO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-02/17461898006814bde80dfb4.webp"
      },
      {
        "id": 205106,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA 2.9 MTS C/ 3 MODULOS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-04/17490719136840b829bf077.webp"
      },
      {
        "id": 205108,
        "categoria": [
          "Estofado"
        ],
        "nomeDoProduto": "ESTOFADO ATLANTA 2.5 MTS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-04/17490721406840b90cda08d.webp"
      },
      {
        "id": 205271,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUPEIRO HERCULES 4 PORTAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-09/174950000768474067cecf7.webp"
      },
      {
        "id": 205276,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "SKD AIR FRYER AMVOX ARF 1245 4,5L 220V",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/1749561855684831ff46eed.webp"
      },
      {
        "id": 205277,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "SKD AIR FRYER AMVOX ARF 1222 OVEN 12L 220V",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/1749562043684832bb02bd6.webp"
      },
      {
        "id": 205278,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "SKD AIR FRYER AMVOX ARF 1255 M BLACK 220 V",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/17495622506848338acb0c1.webp"
      },
      {
        "id": 205288,
        "categoria": [
          "\"Aparador"
        ],
        "nomeDoProduto": "APARADOR BARI 1.00",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/174958030568487a113381b.webp"
      },
      {
        "id": 205289,
        "categoria": [
          "Adega"
        ],
        "nomeDoProduto": "BAR ADEGA BALI - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/174958101768487cd9c0f63.webp"
      },
      {
        "id": 205290,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET MAGNUM EDN 1.90 -OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/174958150568487ec130eea.webp"
      },
      {
        "id": 205291,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "HOME ARBO C/ NICHO UNIVERSAL 1.39 - CEDRO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/174958288068488420d4b78.webp"
      },
      {
        "id": 205292,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "HOME ARBO C/ NICHO UNIVERSAL 1.39 - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/1749582904684884387674d.webp"
      },
      {
        "id": 205293,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "HOME ARBO C/ NICHO UNIVERSAL 1.84 - CEDRO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/174958291668488444b1018.webp"
      },
      {
        "id": 205294,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "HOME ARBO C/ NICHO UNIVERSAL 1.84 - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/17495829236848844bd6c74.webp"
      },
      {
        "id": 205295,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "LAMINA PAINEL ARBO 0.94 - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/174958339568488623115ec.webp"
      },
      {
        "id": 205296,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "LAMINA PAINEL ARBO 0.94 - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/17495834696848866d3090c.webp"
      },
      {
        "id": 205297,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL DAVOS - OFF WHITE / CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/17495836786848873e73c26.webp"
      },
      {
        "id": 205298,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK LEGACY 1.6 - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/174958444668488a3ec9c2c.webp"
      },
      {
        "id": 205300,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL MASTER SEM NICHO EDN 1.80 MTS - CEDRO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/174958514968488cfd5f894.webp"
      },
      {
        "id": 205301,
        "categoria": [
          "Painel"
        ],
        "nomeDoProduto": "PAINEL MASTER SEM NICHO EDN 2.20 MTS - FENDI",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/174958530368488d9701316.webp"
      },
      {
        "id": 205302,
        "categoria": [
          "Rack"
        ],
        "nomeDoProduto": "RACK MASTER EDN 2.2 - FENDI / FREIJO NOBRE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/174958578968488f7d07fe0.webp"
      },
      {
        "id": 205303,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "NICHO DIOR 1.60 MTS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/1749587218684895124404d.webp"
      },
      {
        "id": 205304,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "ACOPLADO CASAL 15 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/174958940668489d9e94767.webp"
      },
      {
        "id": 205305,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "ACOPLADO SOLTEIRO 15 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-10/174958947868489de6d8747.webp"
      },
      {
        "id": 205367,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA RAVENA PLUS C/ CRISTALEIRA - FREIJO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749733661684ad11d9c356.webp"
      },
      {
        "id": 205368,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MALTA 4 PEÇAS - FREIJO / RIPADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749733827684ad1c3411f4.webp"
      },
      {
        "id": 205369,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA MALTA 4 PEÇAS - FREIJO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749733977684ad2595da00.webp"
      },
      {
        "id": 205370,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA COMPACTA OLINDA  + BLC FREIJO / RIPADO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734179684ad323e1aca.webp"
      },
      {
        "id": 205371,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA COMPACTA OLINDA  + BLC FREIJO / RIPADO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734258684ad3722d1ae.webp"
      },
      {
        "id": 205372,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO OLINDA FREIJO / RIPADO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734450684ad43257f5a.webp"
      },
      {
        "id": 205373,
        "categoria": [
          "Balcão"
        ],
        "nomeDoProduto": "BALCÃO OLINDA FREIJO / RIPADO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749734461684ad43d5684b.webp"
      },
      {
        "id": 205375,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT NURIA FREIJÓ / RIPADO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739294684ae71e04910.webp"
      },
      {
        "id": 205376,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT NURIA FREIJÓ / RIPADO / GRAFITE ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739302684ae726cf3ce.webp"
      },
      {
        "id": 205377,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PILAR 11 PTS - FREIJO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739673684ae89923584.webp"
      },
      {
        "id": 205378,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT PILAR 11 PTS - FREIJO / RIPADO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749739680684ae8a0e0096.webp"
      },
      {
        "id": 205379,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT NEW LIVIA - FREIJO / RIPADO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749740057684aea196d01b.webp"
      },
      {
        "id": 205380,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT NEW LIVIA - FREIJO / OFF ACETINADO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749740067684aea236453e.webp"
      },
      {
        "id": 205381,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "SALA DE JANTAR BELLAGIO - FREIJO / OFF",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749740291684aeb0304b4a.webp"
      },
      {
        "id": 205382,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "SALA DE JANTAR BELLAGIO - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749740297684aeb09d0470.webp"
      },
      {
        "id": 205383,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "ARM. MULTIUSO SOLLYS - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749740478684aebbecbc15.webp"
      },
      {
        "id": 205384,
        "categoria": [
          "Sapateiras"
        ],
        "nomeDoProduto": "ARM. MULTIUSO SOLLYS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-12/1749740491684aebcb082ec.webp"
      },
      {
        "id": 205524,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA  ALEXIA PRIME - CINAMOMO OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-18/17502484256852abe97471b.webp"
      },
      {
        "id": 205525,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA ALEXIA PRIME - CINAMOMO GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-17/175016288668515dc69f3cc.webp"
      },
      {
        "id": 205533,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-33 CASAL 1.38 C/ 20 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461292966813d19065eb6.webp"
      },
      {
        "id": 205534,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "COLCHÃO GOLD & SILVER D-20 C\\ 14 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-17/1750171937685181218ce99.webp"
      },
      {
        "id": 205535,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461336046813e2644249f.webp"
      },
      {
        "id": 205536,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - PRATA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461337886813e31c29e11.webp"
      },
      {
        "id": 205537,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461343616813e55966911.webp"
      },
      {
        "id": 205538,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - IMBUIA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461344236813e5970fcad.webp"
      },
      {
        "id": 205539,
        "categoria": [
          "Acessórios"
        ],
        "nomeDoProduto": "KIT DE PÉS ALTO - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/tempImage/2025-05-01/17461340666813e43211783.webp"
      },
      {
        "id": 205540,
        "categoria": [
          "Espelho"
        ],
        "nomeDoProduto": "CAIXA C/ 2 ESPELHOS 0.60 x 0.20",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-05-01/17461321906813dcde283ad.webp"
      },
      {
        "id": 205588,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "ACOPLADO PREMIUM D-33 CASAL 10 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-20/175043761568558eef74f97.webp"
      },
      {
        "id": 205589,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "ACOPLADO PREMIUM D-33 CASAL 5 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-20/175043764668558f0e4fc83.webp"
      },
      {
        "id": 205590,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "ACOPLADO PREMIUM D-33 CASAL MOLAS ENSACADAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-20/175043765668558f1869119.webp"
      },
      {
        "id": 205591,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "ACOPLADO PREMIUM D-33 SOLTEIRO 10 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-20/175043779568558fa3953a4.webp"
      },
      {
        "id": 205592,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "ACOPLADO PREMIUM D-33 SOLTEIRO 5 CM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-20/175043771968558f5764d12.webp"
      },
      {
        "id": 205593,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "ACOPLADO PREMIUM D-33 SOLTEIRO MOLAS ENSACADAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-20/175043775168558f7726673.webp"
      },
      {
        "id": 205822,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "CANTINHO DO CAFÉ FLOW - OFF / FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111152685fd5f058b44.webp"
      },
      {
        "id": 205823,
        "categoria": [
          "Estante"
        ],
        "nomeDoProduto": "CANTINHO DO CAFÉ FLOW - PRETO / FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111164685fd5fc77e0a.webp"
      },
      {
        "id": 205824,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET 4 PORTAS FLOW - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111392685fd6e0b2b22.webp"
      },
      {
        "id": 205825,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET 4 PORTAS FLOW - OFF WWHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111407685fd6ef313a1.webp"
      },
      {
        "id": 205826,
        "categoria": [
          "Buffet"
        ],
        "nomeDoProduto": "BUFFET 4 PORTAS FLOW - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111424685fd700bf163.webp"
      },
      {
        "id": 205827,
        "categoria": [
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ADEGA NEW ODIN - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111680685fd800072a6.webp"
      },
      {
        "id": 205828,
        "categoria": [
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ADEGA NEW ODIN - OFF WHITE / FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111688685fd8089afb9.webp"
      },
      {
        "id": 205829,
        "categoria": [
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ZEUS - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111873685fd8c1775ae.webp"
      },
      {
        "id": 205830,
        "categoria": [
          "Aparador"
        ],
        "nomeDoProduto": "APARADOR ZEUS - OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751111886685fd8ce50bef.webp"
      },
      {
        "id": 205831,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112291685fda63235f7.webp"
      },
      {
        "id": 205832,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - OFF/ FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112303685fda6f308ec.webp"
      },
      {
        "id": 205833,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112313685fda79bd724.webp"
      },
      {
        "id": 205834,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "JOGO DE MESA LIZ - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751112321685fda81d3a10.webp"
      },
      {
        "id": 205835,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "TOUCADOR ORGANIC - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114471685fe2e72c25d.webp"
      },
      {
        "id": 205836,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "TOUCADOR ORGANIC - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114479685fe2ef9c5e0.webp"
      },
      {
        "id": 205837,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUXO NEW - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114527685fe31f56439.webp"
      },
      {
        "id": 205838,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUXO NEW - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114537685fe32978852.webp"
      },
      {
        "id": 205839,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA LUXO NEW - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114546685fe3324177e.webp"
      },
      {
        "id": 205840,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114589685fe35d04366.webp"
      },
      {
        "id": 205841,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - FREIJÓ / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114597685fe3650102d.webp"
      },
      {
        "id": 205842,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114608685fe370e5b58.webp"
      },
      {
        "id": 205843,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE CABECEIRA RETRO ROMA - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114618685fe37a7c8a6.webp"
      },
      {
        "id": 205844,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA 2 GAVETAS - FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114650685fe39acb83e.webp"
      },
      {
        "id": 205845,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA 2 GAVETAS - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114658685fe3a228308.webp"
      },
      {
        "id": 205846,
        "categoria": [
          "Escrivaninha"
        ],
        "nomeDoProduto": "ESCRIVANINHA 2 GAVETAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114669685fe3addedfe.webp"
      },
      {
        "id": 205847,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE COMPUTADOR PRATICA - FREIJO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114690685fe3c20a492.webp"
      },
      {
        "id": 205848,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE COMPUTADOR PRATICA - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114696685fe3c83feb0.webp"
      },
      {
        "id": 205849,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE COMPUTADOR PRATICA - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114704685fe3d0102e9.webp"
      },
      {
        "id": 205850,
        "categoria": [
          "Cama"
        ],
        "nomeDoProduto": "TOUCADOR ORGANIC - OFF WHITE / FREIJÓ",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751114502685fe306dc92d.webp"
      },
      {
        "id": 205851,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA MALIBU NEW - NATURE 3D",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751118610685ff312ee34c.webp"
      },
      {
        "id": 205852,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA MALIBU NEW - JEQUITIBA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751118679685ff357de095.webp"
      },
      {
        "id": 205853,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA MALIBU NEW - BCO / LILAS",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-28/1751118759685ff3a74eef6.webp"
      },
      {
        "id": 205864,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "BANQUETA BEST EAMES BS20 PRETA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-30/17513043316862c88bbeab0.webp"
      },
      {
        "id": 205865,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "BANQUETA BEST EAMES BS20 BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-30/17513043406862c89412fc7.webp"
      },
      {
        "id": 205866,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "BANQUETA BS80 MARROM",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-30/17513049846862cb183b56e.webp"
      },
      {
        "id": 205867,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA KIDS BEST C150 - CINZA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-30/17513053376862cc796350e.webp"
      },
      {
        "id": 205868,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA KIDS BEST C150 - AZUL",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-30/17513053066862cc5ae63a7.webp"
      },
      {
        "id": 205869,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA KIDS BEST C150 - PRETO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-30/17513052776862cc3d453f2.webp"
      },
      {
        "id": 205870,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA DIRETOR BEST C220",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-30/17513056186862cd923e671.webp"
      },
      {
        "id": 205871,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA DIRETOR BEST C200",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-30/17513056406862cda8949d5.webp"
      },
      {
        "id": 205872,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA PRESIDENTE BEST - C301",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-30/17513060516862cf43ed332.webp"
      },
      {
        "id": 205873,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA PRESIDENTE BEST - C303",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-30/17513060696862cf55d7d8b.webp"
      },
      {
        "id": 205874,
        "categoria": [
          "Cadeira"
        ],
        "nomeDoProduto": "CADEIRA PRESIDENTE BEST - C300",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-06-30/17513060876862cf679b5fd.webp"
      },
      {
        "id": 205895,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA VICENZA - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516382716867e0ff88381.webp"
      },
      {
        "id": 205896,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA DELTA - 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-01/175139546768642c8b8aa89.webp"
      },
      {
        "id": 206131,
        "categoria": [
          "Cômoda"
        ],
        "nomeDoProduto": "COMODA VICENZA - CANELATO / NATURA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516382556867e0efbc57a.webp"
      },
      {
        "id": 206133,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE ESCRITÓRIO 3 GAVETAS - ACACIA / REFLECTA",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516391636867e47b93c53.webp"
      },
      {
        "id": 206134,
        "categoria": [
          "Mesa"
        ],
        "nomeDoProduto": "MESA DE ESCRITÓRIO 3 GAVETAS - BRANCO",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516391746867e4860538b.webp"
      },
      {
        "id": 206135,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. COMODA TERESINA PLUS - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516394516867e59bb0bf3.webp"
      },
      {
        "id": 206136,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. COMODA TERESINA PLUS - CANELATO 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516394596867e5a3c347e.webp"
      },
      {
        "id": 206137,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA FORTALEZA - CANELATO / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516398506867e72ace57e.webp"
      },
      {
        "id": 206138,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA FORTALEZA - CANELATO 3D / OFF WHITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516398606867e73447a42.webp"
      },
      {
        "id": 206140,
        "categoria": [
          "Cozinha"
        ],
        "nomeDoProduto": "COZINHA FORTALEZA - CANELATO / GRAFITE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516398706867e73e4b581.webp"
      },
      {
        "id": 206143,
        "categoria": [
          "Roupeiros"
        ],
        "nomeDoProduto": "ROUP. COMODA TERESINA PLUS - ACACIA / REFLECTA ATUALLE",
        "imagem": "https://phizclip-assets.phiz.live/converted/phizshop/pro/Store/Goods/2025-07-04/17516403066867e8f2e725d.webp"
      },
      {
        "id": 181772,
        "categoria": [
          "TV"
        ],
        "nomeDoProduto": "SUPORTE PARA TV",
        "imagem": "https://phizclip-assets.s3.sa-east-1.amazonaws.com/phizshop/pro/Store/Goods/2025-04-28/1745856109680fa66dbf49f.webp"
      },
    ]

  categoriaFiltrada: string | null = null;

  atualizarCategoriaFiltrada(categoria: string) {
    this.categoriaFiltrada = categoria;
  }

  rolarParaProdutos() {
    if (this.secaoProdutos) {
      this.secaoProdutos.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}