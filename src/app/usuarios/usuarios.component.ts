import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../shared/components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [FormsModule, CardComponent, CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {
  textoPesquisa: string | undefined;
  listagemUsuarios: Array<{titulo: string, imagem: string, rota: string}> = [];
  listagemUsuariosPesquisa: Array<{titulo: string, imagem: string, rota: string}> = [];
  usuarios = [
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
  ]
  ngOnInit(): void {
    this.usuarios.forEach(usuario => {
      this.listagemUsuarios.push({
        titulo: usuario.nome,
        imagem: 'assets/images/user.png',
        rota: `cadastro-usuario/${usuario.id}`
      });
    });
    this.listagemUsuariosPesquisa = this.listagemUsuarios;
  }

  pesquisar() {
    if (this.textoPesquisa) {
      this.listagemUsuariosPesquisa = this.listagemUsuarios.filter(usuario => usuario.titulo.toUpperCase().includes(this.textoPesquisa!.toUpperCase()));
    } else {
      this.listagemUsuariosPesquisa = this.listagemUsuarios;
    }
  }
}
