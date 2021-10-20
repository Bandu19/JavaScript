/** 71.- PROBLEMATICA Y NECESIDAD DE CLASES
 *
 */
//Objeto literal
const fher = {
  nombre: "Fernando",
  edad: 30,
  imprimir() {
    // Para llamar una variable dentro de un metodo se utiliza this.
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`); //DUDA
  },
};

const pedro = {
  nombre: "Yasmin",
  edad: 19,
  imprimir() {
    console.log(`Nombre:${this.nombre} - Edad:${this.edad} `);
  },
};

// fher.imprimir();
// pedro.imprimir();

/**  ESTO SE YA ES DE VIEJITOS */
function Persona(nombre, edad) {
  console.log("Se ejecuto esta línea");
  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = function () {
    console.log(`Nombre:${this.nombre} - Edad: ${this.edad}`);
  };
}

//CREAR NUEVA INSTANCIA

const Yasmin = new Persona("Yasmin Sosiano", 19);
const Oscar = new Persona("Oscar Acuña", 22);
console.log(Yasmin);
console.log(Oscar);
//Aqui llamamos la variable Yasmin mas la funcion que ocupa
Yasmin.imprimir();
Oscar.imprimir();
