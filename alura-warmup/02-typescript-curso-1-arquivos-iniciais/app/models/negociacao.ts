export class Negociacao {//classe
  private _data: Date; //privado, se não tiver nada é public automaticamente
  private _quantidade: number; //privado
  private _valor: number; //privado

  constructor(data: Date, quantidade: number, valor: number) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }
  //getters e setters
  get data(): Date {
    return this._data;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }

  // set data(data) {
  //   return this.#data = data;
  // }

  get volume(): number {
    return this._quantidade * this._valor;
  }
}