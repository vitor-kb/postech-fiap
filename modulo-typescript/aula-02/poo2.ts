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
  }
}

class Gato extends Animal {
  fazerSom() {
      console.log("O gato mia.");
  }
}

const meuAnimal: Animal = new Cachorro("Bordercollie");
meuAnimal.fazerSom(); //chama o método fazerSom da classe 'Cachorro'