import { Routes } from '@angular/router';
import { EquipeComponent } from './pages/equipe/equipe';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: '**', redirectTo: '' },
];
