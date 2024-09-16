//Generics podem atribuir qualquer tipo de valor ao T, é distribuído de forma automática


// function caixaMagica<T>(item: T): T {
//   return item;
// }

//aqui retorna mais de um tipo, item1 pode ser number e o item2 pode ser string

// function caixaDupla<T, U>(item1: T, item2: U): [T, U] {
//   return [item1, item2];
// }

interface TemNome {
  nome: string;
}

class Pessoa2 implements TemNome {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

class CaixaNome<T extends TemNome> {
  conteudo: T;

  constructor(conteudo: T) {
    this.conteudo = conteudo;
  }
}

let pessoa4 = new Pessoa2("João"); //está implementando o construtor com o nome
let caixa = new CaixaNome(pessoa4); // está puxando o conteudo de Pessoa2 na variavel pessoa4

console.log(caixa.conteudo.nome);