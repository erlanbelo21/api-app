import { ActivatedRoute, Route, Router } from '@angular/router';
import { Usuario } from './../Models/Usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.page.html',
  styleUrls: ['./alterar-usuario.page.scss'],
})
export class AlterarUsuarioPage implements OnInit {


  Usuario!:Usuario;
  constructor(
    private activeRoute: ActivatedRoute,
    private userService:UsuarioService,
    private router:Router
  ) { }

  ngOnInit() {
    //cria a variavel id
    //pega o id que veio da rota
    //converte em numero
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    
    this.userService.getOne(id).subscribe(retorno=>{
      console.log(this.Usuario);
    })
  }

}
