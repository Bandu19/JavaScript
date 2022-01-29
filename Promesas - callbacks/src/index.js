import "./styles.css";
import { bucarHeroe } from "./js/callbacks";

const heroeId = "capi";

// llamar una función
bucarHeroe(heroeId, (heroe) => {
  console.log("1:", heroe);
});
