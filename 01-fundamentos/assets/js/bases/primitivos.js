//STRING

//FORMA CORRECTA
let nombre = 'Steve ROGER';
console.log(nombre);


nombre = 'Yasmin Soriano';
console.log(nombre);


nombre = "Tia May";
//Backtiks 
nombre = `Tia May`;

//TYPEOF significa describir que tipo de primitivo es la variable
console.log(typeof nombre); //String

nombre = 123;
console.log(typeof nombre); //Number

//BOOLEANOS

let esMarvel = true; //false
console.log(typeof esMarvel); //boolean

//NUMEROS

let edad = 33;
console.log(typeof edad); // Number

edad = 33.001;
console.log(typeof edad); // Number

//CAMEL CASE
let superPoder;
console.log(typeof superPoder); // Undefined


let soyNull = null;
console.log(typeof soyNull); // Object 


//SYMBOL

let Symbol1 = Symbol('a');
let Symbol2 = Symbol('a');

console.log(typeof Symbol1); // symbol

// MANERAS DE PROBAR IF DENTRO DE UNA MENSAJE 
console.log(Symbol1 === Symbol2);












/*FORMA INCORRECTA 
    let nombre2 = 'Rogelio';
    let nombre2 = 'Pedro';

    console.log(nombre2);
OTRA FORMA INCORRECTA ES NO REINIZIALIZAR LAS VARIABLES CON VAR
    var nombre2 = 'Rogelio';
    var nombre2 = 'Pedro';

    console.log(nombre2);


*/