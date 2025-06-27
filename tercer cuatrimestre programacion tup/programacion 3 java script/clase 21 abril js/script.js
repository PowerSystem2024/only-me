
class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this.tipoEntrada = tipoEntrada;
    this.marca = marca;
  }

  toString() {
    return `Tipo Entrada: ${this.tipoEntrada}, Marca: ${this.marca}`;
  }
}

class Raton extends DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
  }
  toString (){
    return `Raton - Tipo: ${this.tipoEntrada}, Marca: ${this.marca}`;
  }
}

class Teclado extends DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
  }
  toString() {
    return `Teclado - Tipo: ${this.tipoEntrada}, Marca: ${this.marca}`;
  }
}
class Monitor {
  constructor(marca, tamanio) {
    this.marca = marca;
    this.tamanio = tamanio;
  }

  toString() {
    return `Monitor: ${this.marca} de ${this.tamanio} pulgadas`;
  }
}
class Computadora {
  constructor(nombre, monitor, teclado, raton) {
    this.nombre = nombre;
    this.monitor = monitor;
    this.teclado = teclado;
    this.raton = raton;
  }

  mostrarDetalles() {
    return `
${this.nombre}:
${this.monitor.toString()}
${this.teclado.toString()}
${this.raton.toString()}
    `;
  }
}

class Orden {
  constructor() {
    this.computadoras = [];
  }

  agregarComputadora(computadora) {
    this.computadoras.push(computadora);
  }

  mostrarOrden() {
    return this.computadoras.map(compu => compu.mostrarDetalles()).join("\n");
  }
}

// Ejemplo de uso 
const raton1 = new Raton("USB", "Logitech"); const teclado1 = new Teclado("Bluetooth", "Razer"); const monitor1 = new Monitor("Samsung", 27);
const compu1 = new Computadora("Gamer 01", monitor1, teclado1, raton1);
const orden1 = new Orden(); orden1.agregarComputadora(compu1);
console.log(orden1.mostrarOrden());

