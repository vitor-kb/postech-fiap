export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    //getters e setters
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    // set data(data) {
    //   return this.#data = data;
    // }
    get volume() {
        return this._quantidade * this._valor;
    }
}
