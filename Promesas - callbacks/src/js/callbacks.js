const heroes = {
  capi: {
    nombre: "Capitan America",
    poder: "Aguantar inyecciones sin morir",
  },
  iron: {
    nombre: "Ironman",
    poder: "Absurda cantidad de dinero",
  },
  spiderman: {
    nombre: "spiderman",
    poder: "La mejor reacción alergica",
  },
};

// El callback retorna ...
export const bucarHeroe = (id, callback) => {
  const heroe = heroes[id];
  // El callback es solo una simple funcion
  callback(heroe);
};
