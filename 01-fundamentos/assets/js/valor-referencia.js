let a = 10;
let b = a;
a = 30;

console.log({ a, b });

/***************ACTIVIDAD ONE **********************/
//OBJETO NATURAL
let juan = {
    nombre: 'Juan',
    edad: 18
};
/* SINTÁXIS SPREAD(...) */

//COPIA DEL OBJETO NATURAL
let ana = {
    ...juan // ESTO LO QUE HACE ES COMO HACER UNA COPIA y pasa las propiedades dentro de un objeto al otro
};
//AGREGAR MAS PROPIEDADES DENTRO DE UN OBJETO
ana.nombre = 'ANA';
ana.edad = 25;

console.log({ juan, ana });

/***************ACTIVIDAD TWO **********************/
/* DENTRO DE LA FUNCION AGREGAMOS EN EL PARAMTREO LAS { } 
    PARA DECLARARLO COMO TIPO OBJETO, Y ENSEGUIDA DENTRO DE LAS 
    LLAVES  SE LE AGREAGA EL METODO SPREAD(...) Y SEGUIDO DEL OBJETO
*/
const cambiaNombre = ({...persona }, {...apellido }) => {
        persona.nombre2 = 'Tony';
        apellido.apellido2 = 'QUEONDA';
        return {
            persona,
            apellido
        };
    }
    //object
let peter = {
    nombre2: 'Peter',
    apellido2: 'Parker'
};
let bend = {
    nombre2: 'ben',
    apellido2: 'Tenison'
};
// Mandar a llamar la funcion
let tony = cambiaNombre(peter, bend);
console.log({ peter, tony });
console.log('---------------------------------------');

const cambiaNombre2 = ({...person }) => {
    person.nom = 'Steve Rogers'
    return person;
}

let iroMan = {
    nom: 'Tony Stark'

}
let avengers = cambiaNombre2(iroMan);
console.log({ iroMan, avengers });
console.log('---------------------------------------');

/***************ACTIVIDAD THREE **********************/

//ARREGLO
const frutas = ['Piña', 'Manzana', 'Platano'];
//NUEVO VALOR
/*Otra manera de implementar  SPREAD*/
// const equipoFrutas = [...frutas]; //PRIMERA SOLUCIÓN
const equipoFrutas = frutas.slice();
equipoFrutas.push('Merengue');

console.table({ frutas, equipoFrutas });