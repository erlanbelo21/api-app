import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Models/Usuario.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.page.html',
  styleUrls: ['./alterar-usuario.page.scss'],
})
export class AlterarUsuarioPage implements OnInit {

  usuario!:Usuario;
  novaSenha: string = '';
  confirmarSenha: string = '';

  constructor(
    private activeRoute :ActivatedRoute,
    private userService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    // Cria a variavel id
    // Pega o ID que veio na rota
    // Converte em numero
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));

    this.userService.getOne(id).subscribe(retorno =>{
      this.usuario = retorno;
      console.log(this.usuario);
    })
  }

  salvarUsuario(){
    if(this.confirmarSenha.trim() && this.novaSenha.trim()){
      if(this.confirmarSenha == this.novaSenha){
        this.usuario.senha = this.novaSenha;

      } else{
        alert("As senhas não são iguais!");
      }
    }

    this.userService.alterar(this.usuario).subscribe(retorno =>{
      this.usuario = retorno;
      alert("Sucesso!, usuário: " + this.usuario.id + "foi salvo!")
      this.router.navigateByUrl("/");
    });

  }

}
