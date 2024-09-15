export class Negociacao {//classe

  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number) { }

  //getters e setters
  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }
}