import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login = {
    email: '',
    senha: ''
  };

  constructor(private loginService: LoginService) {}

  entrar() {
    if(this.login.email && this.login.senha) {
      this.loginService.login(this.login);
      window.alert('Usuario logado');
    } else {
      window.alert('Por favor, preencha os campos');
    }
  }

  cadastrar() {
    console.log('Clicou em Cadastrar');
  }
}
