import "./styles.css";
// Agregar un Alias
import { buscarHeroe as buscarHeroeCallback } from "./js/callbacks";
import { buscarHeroe } from "./js/promesas";

const heroeId = "capi";
const heroeId2 = "iron";

const villanoId = "venom";
const villanoId2 = "modok";

/**
 * --------->CLASE 125. Callback Hell<--------
 *  llamar una función
 *-----/1-VALOR /2-valor(/1-VALOR/-2-valor)
 *
 */
buscarHeroeCallback(heroeId, (err, heroe) => {
  /**
   * Su valor
   * err = `No existe un heroe con el id:${id}`
   *
   *
   * heroe = callback(null, heroe);
   * */
  if (err) {
    console.error(err);
  } else {
    console.info(heroe);
  }
});
/**
 * EL "then" sirve cuando la funcion es verdad.
 * El "catch" sirve cuando la funcion no es verdad.
 * Y el finally es para hacer algun tipo de limpiezas y siempre
 * se va a ejecutar despues de los dos metodos mencionados
 * anteriormente.
 */
buscarHeroe(heroeId).then((variable) => {
  console.log(
    `Enviando a ${variable.nombre}
     a la mision ${variable.poder}`
  );
});

buscarHeroe(heroeId2).then((variable) => {
  console.log(
    `Nombre: ${variable.nombre}
     Poder: ${variable.poder}`
  );
  console.log(`--------------------------------------------`);
});

/**
 * -------------------> CLASE 127 <------------------
 * 
 
     buscarHeroe(heroeId).then((v1) => {
     console.info(`Enviando a ${v1.nombre}`);
    buscarHeroe(heroeId2).then((v2) => {
        console.info(`Enviando a ${v1.nombre} y ${v2.nombre}`);
    });
    });
*/
// DESESTRUCTURACIÓN DE UN ARREGLO COMO UN ARGUMENTO A UNA FUNCION
Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)]).then(
  ([heroe1, heroe2]) => {
    console.info(`Enviando a ${heroe1.nombre} y ${heroe2.nombre}`);
  }
);

//ESTO ES UN ARREGLO CON promesas
Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)]).then((heroes) => {
  console.info(`Enviando a ${heroes[0].poder} y ${heroes[1].poder}`);
});

console.log("Fin de programa");

/**
 * --------------->CLASE 125<----------------
 *
 *  Este es un EJEMPLO DE un CALLBACK HELL
 *
 *
 *  Para resolver casos de callback hell se utilizan
 *  promesas
 */
/** 
buscarVillano(villanoId, (err, villano) => {
  if (err) {
    return console.error(err);
  }
  buscarVillano(villanoId2, (err, villano2) => {
    if (err) {
      return console.error(err);
    }

    console.log(`Enviando a ${villanoId} y ${villanoId2} a la misión`);
  });
});
*/
