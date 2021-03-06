class Persona {
  //Esta es una palabra Reservada
  static _conteo = 0;
  /**GETS ESTATICOS */
  static get conteo() {
    return Persona._conteo + ` instancias`;
  }

  /**METODOS  ESTATICOS*/
  static mensaje() {
    console.log(this.nombre); // ESTO ESTA MAL, ESTO ME ARROJA undefine
    console.log("Hola a todos, soy un método estático");
  }

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
    //ESE CONTEO LO QUE HACE ES CONTAR LAS CONSTANTES QUE TENGAN LAS CLASE persona()
    //En otras palabras cuenta el total de las instancias.
    Persona._conteo++;
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
  /**EL GET solo recupera los valores de los argumentos */
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
const ironMan = new Persona("Tony Stark", "Spiderman", "I am Ironman");

spiderman.setComidaFavorita = "El pie de cereza de la tía May";
spiderman.setJuegoFavorito = "El juego del calamar";

/** ESTO NO SE DEBE DE HACER EN JAVASCRIPT
 *
 */
// spiderman.nemesis = "Duende Verde";
// spiderman.comida = "Duende Verde";

/** CONSOLA */
// console.log(spiderman);
// console.log(spiderman.getComidaFavorita);
// console.log(spiderman.getJuegoFavorito);

console.log("Conteo Estático", Persona._conteo);
console.log(Persona.conteo);

/**Asi llamamos a los metodos Estaticos */
Persona.mensaje();

/**Trabajamos la clase como un
 * objeto literal
 * ejemplo:
 */
Persona.propiedadExterna = "Hola Mundo";
console.log(Persona.propiedadExterna);
console.log(Persona);
