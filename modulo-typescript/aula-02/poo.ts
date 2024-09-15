class Pessoa {
  //atributos
  nome: string;
  idade: number;

  //construtor
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  //metodos
  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e minha idade é ${this.idade}`);

  }
}

const aluno = new Pessoa('Vander', 30);
aluno.saudacao();