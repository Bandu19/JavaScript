/**CLASE 78 SINGLETON EN JAVASCRIPT
 *
 * Un singleton es una instancia única de la clase
 *
 * util en base de datos.
 * util para compartir ingformación.
 */
class Singleton {
  static instancia; // undefined
  nombre = "";

  constructor(nombre = "") {
    // console.log(Singleton.instancia);

    /**
     * Este es un ejemplo del porque utilizamos el valor !!a
     * const a = undefined;
     *
     * console.log(a); //undefined
     * console.log(!a); //true
     * console.log(!!a); // !true = false
     *
     */

    if (!!Singleton.instancia) {
      // Si tienes una instancia las demas seguiran con el
      // con el mismo nombre
      return Singleton.instancia;
    }

    Singleton.instancia = this;
    this.nombre = nombre;

    // return this;
  }
}

const instancia1 = new Singleton("Iroman");
const instancia2 = new Singleton("Spiderman");
const instancia3 = new Singleton("Black Panther");

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);
