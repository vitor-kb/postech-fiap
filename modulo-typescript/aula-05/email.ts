class ServicoEmail{
  enviarEmail(mensagem: string){
    console.log("Enviando e-mail:", mensagem);;
  }
}

class UsuarioService {
    private servicoEmail: ServicoEmail;

    constructor(servicoEmail: ServicoEmail){
      this.servicoEmail = servicoEmail;
    }
    
    registrarUsuario(usuario: {nome: string}) {
      console.log(`Registrando o usuário ${usuario.nome}`);
      this.servicoEmail.enviarEmail("Bem-vindo ao nosso serviço");
    }
}

const servicoEmail = new ServicoEmail();
const usuarioService = new UsuarioService(servicoEmail);

const usuario = {nome: "João"};
usuarioService.registrarUsuario(usuario);