import { Produto } from './../Models/Produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  //Criar a variavel com a URL da API
  private url = 'http://localhost:3000/Produtos';

  //Criar uma lista da classe de Usuários
  public listaProdutos: Produto[] = [];




  //Criar uma instancia do HttpClient
  constructor(private http:HttpClient) { }

  // MÉTODOS DO CRUD COM A API

  //Para o Read, teremos 2 métodos

  // 1 busca todos os registros
  public getAll(): Observable<Produto[]>{
    //Retorna a busca de dados na URL da API
    return this.http.get<Produto[]>(this.url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  // 2 busca 1 unico registro
  public getOne(id:number): Observable<Produto>{
    return this.http.get<Produto>(`${this.url}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  exibirErro(erro: any){
    console.log(erro);
    alert("A operação não pode ser concluida!");
    return EMPTY;
  }
  salvar(Produto:Produto){
    return this.http.post<Produto>(this.url, Produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );;

  }
}
