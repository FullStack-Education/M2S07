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
  listagemUsuarios = [
    {
      titulo: 'Eduardo Silva',
      imagem: 'assets/images/user.png',
      rota: ''
    },
    {
      titulo: 'José Silva',
      imagem: 'assets/images/user.png',
      rota: ''
    },
    {
      titulo: 'José Alves',
      imagem: 'assets/images/user.png',
      rota: ''
    },
    {
      titulo: 'Rodrigo Pereira',
      imagem: 'assets/images/user.png',
      rota: ''
    }
  ];
  listagemUsuariosPesquisa: Array<{titulo: string, imagem: string, rota: string}> = [];

  ngOnInit(): void {
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
