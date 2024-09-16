var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    //construtor
    function Animal(especie) {
        this.especie = especie;
    }
    //metodos
    Animal.prototype.getEspecie = function () {
        return this.especie;
    };
    Animal.prototype.fazerSom = function () {
        console.log("O animal faz um som.");
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.fazerSom = function () {
        console.log("O cachorro late.");
        console.log("Esp\u00E9cie: ".concat(this.getEspecie()));
    };
    return Cachorro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.fazerSom = function () {
        console.log("O gato mia.");
    };
    return Gato;
}(Animal));
var meuCachorro = new Cachorro("Rex");
meuCachorro.fazerSom(); //chama o método fazerSom da classe 'Cachorro'
