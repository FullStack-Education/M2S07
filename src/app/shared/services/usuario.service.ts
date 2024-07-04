import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios = [
    {
      id: 1,
      nome: 'Eduardo Silva',
      cpf: '12345678909',
      email: 'mail@mail.com',
      celular: '15959595959'
    },
    {
      id: 2,
      nome: 'André Silva',
      cpf: '42756456452',
      email: 'teste@mail.com',
      celular: '158686868686'
    },
    {
      id: 3,
      nome: 'Luis Silva',
      cpf: '98765432105',
      email: 'teste@teste.com',
      celular: '157676767676'
    }
  ];

  getUsuarios() {
    return of(this.usuarios);
  }
}
