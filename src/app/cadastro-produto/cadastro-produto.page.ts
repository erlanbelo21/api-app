import { Component } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../Models/Produto.model';

@Component({
  selector: 'app-cadastro-Produto',
  templateUrl: './cadastro-Produto.page.html',
  styleUrls: ['./cadastro-Produto.page.scss'],
})
export class CadastroProdutoPage {

  Produto: Produto = {
    nome: '',
    descricao: '',
    validade: '',
    preco: 0,
  };

  constructor(private produtoService: ProdutoService) { }

  salvarProduto() {
    if (this.Produto.nome && this.Produto.descricao && this.Produto.preco >= 0) {
     
      if (!this.Produto.validade) {
        this.Produto.validade = '01/01/2030';
      }

      this.produtoService.salvar(this.Produto).subscribe((retorno) => {
        this.Produto = retorno;
        alert(`Sucesso! Produto [${this.Produto.id}] foi salvo.`);
      });
    } else {
      alert("Preencha todos os campos corretamente.");
    }
  }
}
