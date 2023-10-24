import { Component, OnInit } from '@angular/core';
import { Produto } from '../Models/Produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  listaProdutos: Produto[] = [];
  produto?: Produto;
  id: number = 0;

  /*
    *Para buscar dados da API, depois de criar o serviço temos que instanciar em uma variavel o serviço criado
  */
  constructor(private prodService: ProdutoService) {}

  //Criar os métodos que conversam com a API

  buscarProdutos(){
    //Primeiro chamamos o método do serviço
    //Depois adicionamos o subscribe para receber
    // a resposta quando ela chegar

    // adicionamos uma variavel que guarda o retorno
    //e enviamos ela para uma função anônima
    // dentro da função vamos adicionar o retorno a variavel
    // local
    this.prodService.getAll().subscribe(retorno =>{
      // "as Produto[]" tentar converter o retorno para este tipo
      this.listaProdutos = retorno as Produto[];
      console.log(this.listaProdutos);
      this.produto = undefined;
    });
  }

  buscarPorID(){
    this.prodService.getOne(this.id).subscribe(retorno =>{
      console.log(retorno);
      this.produto = retorno as Produto;
      this.listaProdutos = [];
    });
  }

  ngOnInit(): void {
    this.buscarProdutos();
  }






}
