//Generics podem atribuir qualquer tipo de valor ao T, é distribuído de forma automática
var Pessoa2 = /** @class */ (function () {
    function Pessoa2(nome) {
        this.nome = nome;
    }
    return Pessoa2;
}());
var CaixaNome = /** @class */ (function () {
    function CaixaNome(conteudo) {
        this.conteudo = conteudo;
    }
    return CaixaNome;
}());
var pessoa4 = new Pessoa2("João"); //está implementando o construtor com o nome
var caixa = new CaixaNome(pessoa4); // está puxando o conteudo de Pessoa2 na variavel pessoa4
console.log(caixa.conteudo.nome);
