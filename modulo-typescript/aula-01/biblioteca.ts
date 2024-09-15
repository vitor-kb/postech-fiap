class Livro {
  titulo: string;
  anoPublicacao: number;

  constructor(titulo: string, anoPublicacao: number) {
    this.titulo = titulo;
    this.anoPublicacao = anoPublicacao;
  }

  exibirDetalhes() {
    console.log(`Livro: ${this.titulo}, publicado em ${this.anoPublicacao}.`);
  }
}

const livroFavorito = new Livro("O Nome do Vento", 2007);
livroFavorito.exibirDetalhes();