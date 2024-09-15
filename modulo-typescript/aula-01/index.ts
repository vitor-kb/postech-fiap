interface Carro {
  acelerar: () => string;
}

class Carro {
  constructor (public marca: string, public modelo: string) {}

  exibirInfo() {
    return `Marca: ${this.marca}, Modelo ${this.modelo}`;
  }
}

Carro.prototype.acelerar = function () {
  return `O ${this.modelo} está acelerando!`
}

let meuCarro = new Carro("Toyota", "Corolla");
console.log(meuCarro.exibirInfo());
console.log(meuCarro.acelerar());

