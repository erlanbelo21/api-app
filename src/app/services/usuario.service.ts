import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../Models/Usuario.model';
import { EMPTY, Observable, catchError, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Criar a variavel com a URL da API
  private url = 'http://localhost:3000/usuarios';

  //Criar uma lista da classe de Usuários
  public listaUsuarios: Usuario[] = [];




  //Criar uma instancia do HttpClient
  constructor(private http:HttpClient) { }

  // MÉTODOS DO CRUD COM A API

  //Para o Read, teremos 2 métodos

  // 1 busca todos os registros
  public getAll(): Observable<Usuario[]>{
    //Retorna a busca de dados na URL da API
    return this.http.get<Usuario[]>(this.url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  // 2 busca 1 unico registro
  public getOne(id:number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  exibirErro(erro: any){
    console.log(erro);
    alert("A operação não pode ser concluida!");
    return EMPTY;
  }

  salvar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  alterar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.url}/${usuario.id}`, usuario).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

}
