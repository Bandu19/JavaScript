console.log(
  "--------------------REPASO 4--------------------------------------"
);

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

// const nombre1 = "TE",
//   apellido1 = "QUIERO",
//   pais1 = "PULGA";

// const Yas = {
//   nombre: "Yasmin",
//   apellido: "Soriano",
//   pais: "México",
// };

// const persona1 = new Persona(nombre1, apellido1, pais1);
// // const persona2 = Persona.proObjeto(Yas);

// persona1.getinfo();
// // persona2.getinfo();

//FORZOZAMENTE CUANDO MANEJAMOS OBJETOS LITERALES
/**TIENEN QUE TENER LAS MISMAS VARIABLES */
const Yas = {
  nombre: "TE",
  apellido: "QUIERO",
  pais: "PULGA",
};
const min = {
  fr: "TE",
  fr2: "EXTRAÑO",
  fr3: "HERMOSA UwU",
};

const frase = Persona.proObjeto(Yas);

frase.getinfo();
