import { Routes } from '@angular/router';
import { EquipeComponent } from './pages/equipe/equipe';
import { HomeComponent } from './pages/home/home';
import { BanhoTosaComponent } from './pages/banho-tosa/banho-tosa';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'servicos/banho-tosa', component: BanhoTosaComponent },
  { path: '**', redirectTo: '' }, ///qualquer-coisa-errada → redireciona para home ✅
];
