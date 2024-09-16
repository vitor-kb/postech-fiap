class Animal {
  //atributos
  private especie: string;

  //construtor
  constructor(especie: string){
    this.especie = especie;
  }

  //metodos
  getEspecie(): string {
    return this.especie;
  }

  fazerSom() {
    console.log("O animal faz um som.");
  }
}

class Cachorro extends Animal {
  fazerSom() {
      console.log("O cachorro late.");
      console.log(`Espécie: ${this.getEspecie()}`);
  }
}

class Gato extends Animal {
  fazerSom() {
      console.log("O gato mia.");
  }
}

const meuCachorro = new Cachorro("Rex");
meuCachorro.fazerSom(); //chama o método fazerSom da classe 'Cachorro'