import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LabelErroDirective } from '../shared/directives/label-erro.directive';
import { nomeCompleto } from '../shared/validators/nome-completo.validator';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LabelErroDirective],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent implements OnInit {
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
  ];
  formCadastro!: FormGroup;
  idUsuario: string | undefined;

  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.idUsuario = this.activatedRoute.snapshot.params['id'];

    this.formCadastro = new FormGroup({
      nome: new FormControl('', [Validators.required, nomeCompleto()]),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required)
    });

    const usuario = this.usuarios.find(usuario => usuario.id === parseInt(this.idUsuario!));

    this.formCadastro.patchValue(usuario!);
  }

  cadastrar() {
    if(this.formCadastro.valid) {
      console.log('formCadastro: ', this.formCadastro);
    } else {
      this.formCadastro.markAllAsTouched();
    }
  }
}
