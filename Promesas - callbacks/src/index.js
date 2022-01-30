import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas.js";

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);
// Es igual a lo que tenemos a lo de abajo.
// promesaMedia.then((mensaje) => console.log(mensaje));
/**
 *
 * EL "promise.rice" nos permite a nosotros ejecutar las promesas en conjunto
 * y obtener el mensaje de la promesa que se resuelve mas RAPIDO
 *
 */

Promise.race([promesaLenta, promesaMedia, promesaRapida])
  .then(console.log)
  .catch(console.warn);
