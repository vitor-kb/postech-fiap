//Definição do namespace MatematicaBasica
namespace MatematicaBasica {
  export function somar(a: number, b: number): number {
    return a + b;
  }

  export function subtrair(a: number, b: number): number {
    return a - b;
  }
}

//Definição do namespace MatematicaAvancada
namespace MatematicaAvancada {
  export function exponenciar(base: number, expoente: number): number {
    return Math.pow(base, expoente);
  }
}

//Uso das funções dos namespaces
console.log(MatematicaBasica.somar(5, 3));
console.log(MatematicaBasica.subtrair(5, 3));
console.log(MatematicaAvancada.exponenciar(2, 3));
