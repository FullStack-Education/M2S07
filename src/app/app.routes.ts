import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConversorComponent } from './conversor/conversor.component';

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
    path: 'conversor',
    component: ConversorComponent
  },
  {
    path: 'usuarios',
    children: [
      {
        path: '',
        component: UsuariosComponent
      },
      {
        path: 'cadastro-usuario',
        component: CadastroUsuarioComponent
      },
      {
        path: 'cadastro-usuario/:id',
        component: CadastroUsuarioComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
