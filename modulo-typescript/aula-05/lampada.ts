class Interruptor {
  ligar() {
    console.log('Lâmpada Ligada');
  }
}

class Lampada {
  private interruptor: Interruptor;

  constructor(interruptor: Interruptor){
    this.interruptor = interruptor;
  }
  
  acionar() {
    this.interruptor.ligar();
  }
}

const interruptor = new Interruptor();
const lampada = new Lampada(interruptor);
lampada.acionar();