import "./styles.css";
import { bucarHeroe } from "./js/callbacks";

const heroeId = "capi";

//-----> CLASE-123 <-----

// llamar una función
bucarHeroe(heroeId, (heroe) => {
  console.log("1:", heroe);
});

console.log("Fin de programa");
