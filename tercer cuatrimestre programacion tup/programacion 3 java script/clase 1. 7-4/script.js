class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    getTipoEntrada() {
        return this.tipoEntrada;
    }

    setTipoEntrada(tipoEntrada) {
        this.tipoEntrada = tipoEntrada;
    }

    getMarca() {
        return this.marca;
    }

    setMarca(marca) {
        this.marca = marca;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    }

    toString() {
        return `Raton [ID: ${this.idRaton}, Marca: ${this.marca}, Entrada: ${this.tipoEntrada}]`;
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclados;
    }

    toString() {
        return `Teclado [ID: ${this.idTeclado}, Marca: ${this.marca}, Entrada: ${this.tipoEntrada}]`;
    }
}

class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamano) {
        this.idMonitor = ++Monitor.contadorMonitores;
        this.marca = marca;
        this.tamano = tamano;
    }

    toString() {
        return `Monitor [ID: ${this.idMonitor}, Marca: ${this.marca}, Tamaño: ${this.tamano}]`;
    }
}

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this.idComputadora = ++Computadora.contadorComputadoras;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }

    toString() {
        return `Computadora [ID: ${this.idComputadora}, Nombre: ${this.nombre}]\n  ${this.monitor.toString()}\n  ${this.teclado.toString()}\n  ${this.raton.toString()}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let computadorasStr = '';
        this._computadoras.forEach(comp => {
            computadorasStr += comp.toString() + '\n';
        });

        console.log(`Orden [ID: ${this._idOrden}]\n${computadorasStr}`);
    }
}


