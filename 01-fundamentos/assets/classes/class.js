class Persona {
  //ES UN METODO que creera Instancias
  //Estos son Propiedades de clase
  nombre = "";
  codigo = "";
  frase = "";
  apellido = "";

  constructor(nombre, codigo, frase, apellido) {
    // console.log("Hola!");

    //FORMA DE MANDAR MENSAJE DE ERROR EN LA CONSOLA
    if (!nombre) throw Error("Nececitamos el nombre");
    //d

    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    this.apellido = apellido;
  }
  /** Estos Son metodos */
  queinSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}.`); //SE MANDA UN MENSAJE
  }
  miCodigo() {
    this.queinSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }

  //PRUEBA

  quienEres() {
    console.log(`Soy ${this.nombre} y mi codigo es ${this.frase}.`);
  }

  //OTHER EXERCISE

  queinToca() {
    console.log(
      `Mi nombre es: ${this.nombre} y mi apellido es: ${this.apellido}`
    );
  }
}

/** LLAMAMOS AQUI LOS INSTANCIAS DETRO DE UNA CLASE QUE LLEVA DENTRO
 * UN CONSTRUCTOSR
 *
 */
const batMan = new Persona("Oscar", 13, "TODOS ");
const spiderman = new Persona(
  "Peter Parker",
  "Spiderman",
  "Un gran poder conlleva a una responsabilidad"
);
const wife = new Persona("Yasmin Sori", "19", "Te vas a Morir Prro.");
const husBand = new Persona("Oscar Gustavo", "-", "-", "Sostenes");

/** MENSAJES EN CONSOLA */
console.log(batMan);
console.log(spiderman);
console.log(husBand);
/** AQUI EJECUTA TODOS LAS INSTANCIAS */
spiderman.queinSoy();
wife.miCodigo();
batMan.queinSoy();
wife.quienEres();
husBand.queinToca();

// const spiderman = new Persona();
// console.log(spiderman);
