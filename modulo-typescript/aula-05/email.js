var ServicoEmail = /** @class */ (function () {
    function ServicoEmail() {
    }
    ServicoEmail.prototype.enviarEmail = function (mensagem) {
        console.log("Enviando e-mail:", mensagem);
        ;
    };
    return ServicoEmail;
}());
var UsuarioService = /** @class */ (function () {
    function UsuarioService(servicoEmail) {
        this.servicoEmail = servicoEmail;
    }
    UsuarioService.prototype.registrarUsuario = function (usuario) {
        console.log("Registrando o usu\u00E1rio ".concat(usuario.nome));
        this.servicoEmail.enviarEmail("Bem-vindo ao nosso serviço");
    };
    return UsuarioService;
}());
var servicoEmail = new ServicoEmail();
var usuarioService = new UsuarioService(servicoEmail);
var usuario = { nome: "João" };
usuarioService.registrarUsuario(usuario);
