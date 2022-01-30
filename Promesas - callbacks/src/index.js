import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";

buscarHeroe("capi").then(console.log);
buscarHeroeAsync("iron").then(console.log);
