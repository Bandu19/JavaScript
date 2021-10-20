/** TODO LO APRENDIDO DE SET Y GET */

class Persona {
  nombre = "";
  apellidoP = "";
  apellidoM = "";
  edad = "";
  estado = "";

  constructor(
    nombre = "Sin nombre",
    apellidoP = "Sin apellido",
    apellidoM = "Sin apellido",
    edad = "Sin edad",
    estado = "Sin estado"
  ) {
    this.nombre = nombre;
    this.apellidoP = apellidoP;
    this.apellidoM = apellidoM;
    this.edad = edad;
    this.estado = estado;
  }

  set setDatosEdad(edad) {
    this.edad = edad;
  }
  set setDatosEstado(estado) {
    this.estado = estado.toUpperCase();
  }
  /** TENER CUIDADO CON LOS ESPACIOS */
  get getDevolucion() {
    return `Su nombre es: ${this.nombre}, sus apellidos son: ${this.apellidoP} ${this.apellidoM}, edad:${this.edad} y su estado civil es:${this.estado}`;
  }

  /** METODO
   *
   */
  datosUsuario() {
    console.log(
      `Su nombre es: ${this.nombre} y su apellidos son: ${this.apellidoP} ${this.apellidoM}`
    );
  }
}

/** VARIABLE CONSTANTE
 *
 */
// const alumno = new Persona("Oscar", "Acuña", "Sóstenes", "22", "Comprometido ");
const alumno = new Persona("Oscar", "Acuña", "Sóstenes");
const alumna = new Persona("Yasmin", "Soriano", "Gutierrez");

/** Mandar VALORES  de SET
 * Asi se envian los datos extra asia la constante
 */
alumno.setDatosEdad = 22;
alumno.setDatosEstado = "Comprometido";

/**Mandar Valores de SET */
alumna.setDatosEdad = 19;
alumna.setDatosEstado = "Comprometida 7u7";

/*  CONSOLA
 *
 */
console.log(alumno);
console.log(alumno.getDevolucion);
console.log(alumna.getDevolucion);
// alumno.datosUsuario();
