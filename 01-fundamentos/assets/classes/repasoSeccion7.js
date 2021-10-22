//REPASO RAPIDO

class Persona2 {
  static _conteo = 0;

  nombre = "";
  edad = "";
  barrio = "";
  comida = "";
  bebida = "";
  constructor(nombre = "Sin datos", edad = "Sin datos", barrio = "Sin datos") {
    this.nombre = nombre;
    this.edad = edad;
    this.barrio = barrio;
    Persona2._conteo++;
  }

  set setDatosComida(comida) {
    this.comida = comida.toUpperCase();
  }
  set setDatosBebida(bebida) {
    this.bebida = bebida.toUpperCase();
  }

  get getDatosGenerales() {
    return `Nombre: ${this.nombre}, Edad:${this.edad}, Barrio: ${this.barrio}, Comida: ${this.comida} y Bebida: ${this.bebida} `;
  }
  datosUsuarios() {
    console.log(`Hola Mundo: ${this.nombre}`);
  }
}

const alumno1 = new Persona2("Oscar", "22", "Loma Bonita");

alumno1.setDatosComida = "Marucha";
alumno1.setDatosBebida = "Pepsi";

console.log(alumno1);
console.log(alumno1.getDatosGenerales);
alumno1.datosUsuarios();
console.log(
  "--------------------REPASO 2--------------------------------------"
);
/**
 *
 */

class Persona3 {
  static _conteo = 0;

  static get getGeneral() {
    return Persona3._conteo + ` Hola a todos`;
  }
  static metodoDatos() {
    return Persona3._conteo + " ESTE ES UN ESTATICO METODO";
  }

  nombre = "";
  edad = "";
  barrio = "";
  comida = "";
  constructor(nombre = "Sin datos", edad = "Sin datos", barrio = "Sin datos") {
    this.nombre = nombre;
    this.edad = edad;
    this.barrio = barrio;
    Persona3._conteo++; // Contador de instancias
  }

  set setDatosComida(comida) {
    this.comida = comida.toUpperCase();
  }

  get getDatosGenerales() {
    return `Nombre: ${this.nombre}, Edad:${this.edad}, Barrio: ${this.barrio}y Comida: ${this.comida}`;
  }
  datosUsuarios() {
    console.log(`Hola Mundo: ${this.nombre}`);
  }
}
const alumno2 = new Persona3("Edwin", "25", "Machupichu");
const alumno3 = new Persona3("Oscar", "24", "Tula");

alumno2.setDatosComida = "Marucha";
console.log(alumno2);
console.log("Instancias son:", Persona3._conteo);
console.log("Estatico Get:", Persona3.getGeneral);
console.log("Estatico Get:", Persona3.metodoDatos());
console.log(
  "--------------------REPASO 3--------------------------------------"
);
class Persona4 {
  static _conteo = 0;

  static get getGeneral() {
    return Persona3._conteo + ` Hola a todos`;
  }
  static metodoDatos() {
    return Persona3._conteo + " ESTE ES UN ESTATICO METODO";
  }

  nombre = "";
  edad = "";
  barrio = "";
  comida = "";
  constructor(nombre = "Sin datos", edad = "Sin datos", barrio = "Sin datos") {
    this.nombre = nombre;
    this.edad = edad;
    this.barrio = barrio;
    Persona4._conteo++; // Contador de instancias
  }

  set setDatosComida(comida) {
    this.comida = comida.toUpperCase();
  }

  get getDatosGenerales() {
    return `Nombre: ${this.nombre}, Edad:${this.edad}, Barrio: ${this.barrio} y Comida: ${this.comida}`;
  }
  datosUsuarios() {
    console.log(`Hola Mundo: ${this.nombre}, ${this.edad},${this.barrio}`);
  }
}

class Villano extends Persona4 {
  variable_1 = "";
  variable_2 = "";

  constructor(nombre, edad, barrio) {
    super(nombre, edad, barrio);
    this.variable_1 = "variable_1";
    this.variable_2 = "variable_2";
  }
  datosUsuarios() {
    console.log(`Hola Mundo2: ${this.nombre}, ${this.edad},${this.barrio}`);
    super.datosUsuarios();
  }
}
const compañero = new Villano("Yasmin", "19", "GUALUPITA");

console.log(compañero);
compañero.datosUsuarios();

// console.log("Estatico Get:", compañero.getDatosGenerales);
