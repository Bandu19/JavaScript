import "./styles.css";
import { bucarHeroe, buscarVillano } from "./js/callbacks";

const heroeId = "capi";

const villanoId = "tanos";

// CLASE 124. Argumentos estandar de los callbacks

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

buscarVillano(villanoId, (err, villano) => {
  if (err) {
    console.error(err);
  } else {
    console.log(villano);
  }
});
