class Persona {
  //ES UN METODO que creera Instancias
  //Estos son Propiedades de clase
  nombre = "";
  codigo = "";
  frase = "";
  apellido = "";
  //INSTANCIAS NO INCLUIDAS EN EL CONSTRUCTOR
  comida = "";
  juegos = "";

  constructor(
    nombre = "Sin Nombre",
    codigo = "Sin Codigo",
    frase = " Sin Frase",
    apellido = " Sin Apellido"
  ) {
    //FORMA DE MANDAR MENSAJE DE ERROR EN LA CONSOLA
    if (!nombre) throw Error("Nececitamos el nombre");
    //d

    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    this.apellido = apellido;
  }

  /***************************************************************************/
  /** EL METODO SET
   *
   */
  /**El SET solo recibe un argumento*/
  set setComidaFavorita(comida) {
    //
    this.comida = comida.toUpperCase();
  }

  set setJuegoFavorito(juego) {
    this.juegos = juego.toUpperCase();
  }

  /** EL METODO GET
   *
   */

  get getComidaFavorita() {
    return `La comida Favorita de ${this.nombre} es ${this.comida} `;
  }

  get getJuegoFavorito() {
    return `El juego Favorito de ${this.nombre} es ${this.juegos}`;
  }

  /***************************************************************************/

  /** Estos Son metodos */
  queinSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}.`); //SE MANDA UN MENSAJE
  }
  miCodigo() {
    this.queinSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

/** LLAMAMOS AQUI LOS INSTANCIAS DETRO DE UNA CLASE QUE LLEVA DENTRO
 * UN CONSTRUCTOSR
 */

const spiderman = new Persona(
  "Peter Parker",
  "Spiderman",
  "Un gran poder conlleva a una responsabilidad"
);

spiderman.setComidaFavorita = "el pie de cereza de la tía May";
spiderman.setJuegoFavorito = "El juego del calamar";

/** ESTO NO SE DEBE DE HACER EN JAVASCRIPT
 *
 */
// spiderman.nemesis = "Duende Verde";
// spiderman.comida = "Duende Verde";

// CONSOLA
console.log(spiderman);
console.log(spiderman.getComidaFavorita);

console.log(spiderman.getJuegoFavorito);
