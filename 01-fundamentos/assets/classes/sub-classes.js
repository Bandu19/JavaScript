class Persona {
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + `instancias`;
  }
  static mensaje() {
    console.log("Hola a todos este es un metodo estático");
  }

  nombre = "";
  codigo = "";
  frase = "";
  apellido = "";
  comida = "";
  juegos = "";

  constructor(
    nombre = "Sin nombre",
    codigo = "Sin codigo",
    frase = "Sin Frase",
    apellido = "Sin Apellido"
  ) {
    if (!nombre) throw Error("Nececitamos el nombre");
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    this.apellido = apellido;
    Persona._conteo++;
  }
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }
  set setJuegoFavorito(juego) {
    this.juegos = juego.toUpperCase();
  }
  get getComidaFavorita() {
    return `La comida Favorita de ${this.nombre} es ${this.comida} `;
  }
  get getJuegoFavorito() {
    return `El juego Favorito de ${this.nombre} es ${this.juegos}`;
  }
  queinSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}.`); //SE MANDA UN MENSAJE
  }
  miCodigo() {
    this.queinSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

/**
 *  Aqui llamamos todas las propiedades de la clase PERSONA
 *  y la mandamos a llamar a Persona
 */
class Heroe extends Persona {
  clan = "Sin Clan";
  //   nombreDos = "CAPITAN"; //agregar variables

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase); //ESTO ES OBLIGATORIO cuando trabajas con otra CLASE
    this.clan = "Los Avengers";
  }

  /**
   * Aqui trabajare con el metodo de la clase HEROE
   */
  queinSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    /**
     * Aqui llamare al metodo HEROE de la clase Persona
     */
    super.queinSoy();
  }
}

const spiderman = new Heroe(
  "Peter Parker",
  "Spiderman",
  "Un gran poder conlleva a una responsabilidad"
);

/**
 * AQUI ES EL EJEMPLO
 */
// const spiderman = new Heroe();

console.log(spiderman);
spiderman.queinSoy();
