import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
