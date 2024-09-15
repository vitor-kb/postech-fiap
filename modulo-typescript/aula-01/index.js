var Carro = /** @class */ (function () {
    function Carro(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    Carro.prototype.exibirInfo = function () {
        return "Marca: ".concat(this.marca, ", Modelo ").concat(this.modelo);
    };
    return Carro;
}());
Carro.prototype.acelerar = function () {
    return "O ".concat(this.modelo, " est\u00E1 acelerando!");
};
var meuCarro = new Carro("Toyota", "Corolla");
console.log(meuCarro.exibirInfo());
console.log(meuCarro.acelerar());
