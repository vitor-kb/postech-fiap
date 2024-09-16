// interface como se fosse uma lista de verificação para criar objetos

//abstract seriam classes que define características comuns que servem de base pra outra classe

// interface Carro {
//   marca: string;
//   modelo: string;
//   ano: number;
//   ligar(): void;
// }

// class MeuCarro implements Carro {
//   marca: string;
//   modelo: string;
//   ano: number;

//   constructor(marca: string, modelo: string, ano: number) {
//       this.marca = marca;
//       this.modelo = modelo;
//       this.ano = ano;
//   }

//   ligar() {
//       console.log(`Ligando ${this.modelo}`);
//   }
// }

interface Quimico {
  //atributos
  nome: String;

  //metodo
  calcularMassaMolar: (formula: string) => number;
}

class Bioquimico implements Quimico {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
  calcularMassaMolar(formula: string): number {
    const massasAtomicas: { [elemento: string]: number } = {
      'H': 1, //Hidrogênio
      'C': 12, //Carbono
      'O': 16, //Oxigênio
      'N': 14, //Nitrogênio
    };
    let massaMolar = 0;
    const regex = /([A-Z][a-z]*)(\d*)/g;
    let match;

    while ((match = regex.exec(formula)) !== null) {
      const elemento = match[1];
      const quantidade = parseInt(match[2] || '1');
      if (massasAtomicas[elemento]) {
        massaMolar += massasAtomicas[elemento] * quantidade;
      } else {
        throw new Error(`Elemento desconhecido: ${elemento}`);
      }
    }
    return massaMolar;
  }
  calcularEMostrarMassaMolar(formula: string): string {
    const massaMolar = this.calcularMassaMolar(formula);
    return `O bioquímico ${this.nome} calculou a massa do ${formula} e chegou ao número de ${massaMolar}`
  }
}

let bioquimico = new Bioquimico("Vander");
console.log(bioquimico.calcularEMostrarMassaMolar("CO2"));
