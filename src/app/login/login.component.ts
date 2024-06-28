import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  entrar() {
    if(this.login.email && this.login.senha) {
      window.alert('Usuario logado');
    } else {
      window.alert('Por favor, preencha os campos');
    }
  }

  cadastrar() {
    console.log('Clicou em Cadastrar');
  }
}
