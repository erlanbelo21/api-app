import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import {Produto } from '../Models/Produto.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  listaProdutos: Produto[] = [];
  Produto?: Produto;
  id: number = 0;

  /*
    *Para buscar dados da API, depois de criar o serviço temos que instanciar em uma variavel o serviço criado
  */
  constructor(private userService: ProdutoService) {}

  //Criar os métodos que conversam com a API

  buscarprodutos(){
    //Primeiro chamamos o método do serviço
    //Depois adicionamos o subscribe para receber
    // a resposta quando ela chegar

    // adicionamos uma variavel que guarda o retorno
    //e enviamos ela para uma função anônima
    // dentro da função vamos adicionar o retorno a variavel
    // local
    this.userService.getAll().subscribe(retorno =>{
      // "as Produto[]" tentar converter o retorno para este tipo
      this.listaProdutos = retorno as Produto[];
      console.log(this.listaProdutos);
      this.Produto = undefined;
    });
  }

  buscarPorID(){
    this.userService.getOne(this.id).subscribe(retorno =>{
      console.log(retorno);
      this.Produto = retorno as Produto;
      this.listaProdutos = [];
    });
  }

  ngOnInit(): void {
    this.buscarprodutos();
  }






}
