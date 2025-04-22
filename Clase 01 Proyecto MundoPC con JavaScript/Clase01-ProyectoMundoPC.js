/** Clase: DispositivoEntrada */
class DispositivoEntrada {
  
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  toString() {
    return `Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
  }
}

/**Clase: Raton - hereda de DispositivoEntrada */
class Raton extends DispositivoEntrada {

  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  get idRaton() {
    return this._idRaton;
  }

  toString() {
    return `Raton: [${super.toString()}, ID: ${this._idRaton}]`;
  }
}


/**Clase: Teclado - hereda de DispositivoEntrada */
class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  get idTeclado() {
    return this._idTeclado;
  }

  toString() {
    return `Teclado: [${super.toString()}, ID: ${this._idTeclado}]`;
  }
}


/**Clase: Monitor */
class Monitor {

  static contadorMonitores = 0;

  constructor(marca, tamanio) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamanio = tamanio;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  toString() {
    return `Monitor: [ID: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamanio}]`;
  }
}


/**Clase: Computadora */
class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

  toString() {
    return `Computadora: [ID: ${this._idComputadora}, Nombre: ${this._nombre}, ${this._monitor.toString()}, ${this._teclado.toString()}, ${this._raton.toString()}]`;
  }


}

/**Clase: Orden */
class Orden {
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }


    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
       let computadorasOrden = '';
        for (let computadora of this._computadoras){
            computadorasOrden += `\n${computadora.toString()}`;
        }
        computadorasOrden = computadorasOrden ? computadorasOrden : 'No hay computadoras en la orden.';
        return `Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`;
    }
}


/** PRUEBAS */
/** Primera computadora */
let raton1 = new Raton("USB", "Logitech");
console.log(raton1.toString());
let teclado1 = new Teclado("Bluetooth", "Microsoft");
console.log(teclado1.toString());

let monitor1 = new Monitor("Dell", "27 pulgadas");
console.log(monitor1.toString());

let computadora1 = new Computadora("PC Gamer", monitor1, teclado1, raton1)
console.log(computadora1.toString());

/** Segunda computadora */
let raton2 = new Raton("USB", "Q-BOX");
console.log(raton1.toString());
let teclado2 = new Teclado("USB", "Q-BOX");
console.log(teclado1.toString());

let monitor2 = new Monitor("Samsung", "24 pulgadas");
console.log(monitor1.toString());

let computadora2 = new Computadora("PC Office", monitor1, teclado1, raton1)
console.log(computadora1.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
console.log(orden1.mostrarOrden());

/** Método para demostrar polimorfismo
 * 
 * La clase Orden no participa en el polimorfismo porque tiene como objetivo 
 * gestionar una colección de objetos Computadora. Pero cabe aclarar 
 * igual se usa indirectamente al invocar el metodo toString de los objetos 
 * Computadora dentro de la función MostrarOrden
 */
function imprimirDetalles(dispositivo){
    console.log(dispositivo.toString());
}

mostrarDetalles(raton1);
mostrarDetalles(teclado1); 
mostrarDetalles(monitor1); 
mostrarDetalles(computadora1);