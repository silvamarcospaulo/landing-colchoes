import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { ProdutoDetalhes } from './components/pages/produto-detalhes/produto-detalhes';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'produto/:id', component: ProdutoDetalhes },
];