import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../services/usuario.service';
import { Usuario } from './../Models/Usuario.model';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  usuario: Usuario = {
    nome: '',
    email: '',
    senha: ''
  };

  corfirmaSenha = '';

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  salvarUsuario() {
    if (this.corfirmaSenha.trim() && this.usuario.senha.trim()) {
      if (this.corfirmaSenha === this.usuario.senha) {
        this.usuarioService.salvar(this.usuario).subscribe((retorno) => {
          this.usuario = retorno;
          alert(`Sucesso! Usuario [${this.usuario.id}] foi salvo.`);
        });
      } else {
        alert("As senhas não são iguais.");
      }
    } else {
      alert("Os campos senha devem ser preenchidos.");
    }
  }
}

