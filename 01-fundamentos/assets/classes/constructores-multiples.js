/**
 * Sobrecarga de constructores
 *
 */

class Persona {
  //Estructuracion de argumentos
  static proObjeto({ nombre, apellido, pais }) {
    /**
     * Aqui regresa una nueva instancia de PERSONA
     * manipulando el constructor que tenemos abajo
     */
    return new Persona(nombre, apellido, pais);
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getinfo() {
    console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }
}

const nombre1 = "Oscar",
  apellido1 = "Acuña",
  pais1 = "Sóstenes";

//objeto literal
/** TIENEN QUE TENER LAS MISMAS VARIABLES
 * que las de la INSTANCIA de la CLASE
 */

const Yas = {
  nombre: "Yasmin",
  apellido: "Soriano",
  pais: "México",
};

const persona1 = new Persona(nombre1, apellido1, pais1);
/**
 * LLamamos el Metodo Estatico.
 */
const persona2 = Persona.proObjeto(Yas);

/**
 * ESTO DA PERESA HACER UNA INSTANCIA SI TENEMOS OTRA OBJETO CON NUEVAS
 * PROPIEDADES.
 *
 * const persona2 = new Persona(nombre1, apellido1, pais1);
 */
persona2.getinfo();
persona1.getinfo();
