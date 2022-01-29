import "./styles.css";
import { bucarHeroe, buscarVillano } from "./js/callbacks";

const heroeId = "capi";

const villanoId = "venom";
const villanoId2 = "modok";

// CLASE 125. Callback Hell

// llamar una función
//--------/1-VALOR /2-valor(/1-VALOR/-2-valor)
bucarHeroe(heroeId, (err, heroe) => {
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

console.log("Fin de programa");

/**
 *  Este es un EJEMPLO DE un CALLBACK HELL
 *
 *
 *  Para resolver casos de callback hell se utilizan
 *  promesas
 */
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
