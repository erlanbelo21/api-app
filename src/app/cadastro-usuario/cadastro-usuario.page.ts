import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Models/Usuario.model';
import { UsuarioService } from '../services/usuario.service';

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
  confirmaSenha = '';
  
  constructor(private userService: UsuarioService) { }

  ngOnInit() {
  }

  salvarUsuario(){
    if(this.confirmaSenha.trim() && this.usuario.senha.trim()){
      if(this.confirmaSenha == this.usuario.senha){
        this.userService.salvar(this.usuario).subscribe(retorno =>{
          this.usuario = retorno;
          alert("Sucesso!, usuário: " + this.usuario.id + "foi salvo!")
        });
      } else{
        alert("As senhas não são iguais!");
      }

    } else{
      alert("Os campos de senha devem ser preenchidos!")
    }

    
  }
}
