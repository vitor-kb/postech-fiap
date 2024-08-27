export class Negociacao {//classe
  #data; //privado
  #quantidade; //privado
  #valor; //privado

  constructor(data, quantidade, valor) {
    this.#data = data;
    this.#quantidade = quantidade;
    this.#valor = valor;
  }
  //getters e setters
  get data() {
    return this.#data;
  }

  get quantidade() {
    return this.#quantidade;
  }

  get valor() {
    return this.#valor;
  }

  // set data(data) {
  //   return this.#data = data;
  // }

  get volume() {
    return this.#quantidade * this.#valor;
  }
}