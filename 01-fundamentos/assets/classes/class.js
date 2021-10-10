class Persona {
  //ES UN METODO que creera Instancias
  //Estos son Propiedades de clase
  nombre = "";
  codigo = "";
  frase = "";

  constructor(nombre, codigo, frase) {
    // console.log("Hola!");

    //FORMA DE MANDAR MENSAJE DE ERROR EN LA CONSOLA
    if (!nombre) throw Error("Nececitamos el nombre");
    //d

    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }
}
const batMan = new Persona("Oscar", 13, "TODOS ");
const spiderman = new Persona(
  "Peter Parker",
  "Spider",
  "Un gran poder conlleva a una responsabilidad"
);

console.log(batMan);
console.log(spiderman);

// const spiderman = new Persona();
// console.log(spiderman);
