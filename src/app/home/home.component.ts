import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../shared/components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  listaAtividades = [
    {
      titulo: 'Calculadora',
      imagem: 'assets/images/atividade-1.png',
      rota: '/calculadora'
    },
    {
      titulo: 'Atividade 2',
      imagem: 'assets/images/atividade-2.png',
      rota: ''
    },
    {
      titulo: 'Atividade 3',
      imagem: 'assets/images/atividade-3.png',
      rota: ''
    }
  ];
}
