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

const villanos = {
  venom: {
    nombre: "Edik bruck",
    poder: "Comedia",
  },
  tanos: {
    nombre: "El titan loco",
    poder: "Gemas del infinito",
  },
  modok: {
    nombre: "El cabezas",
    poder: "telepatia",
  },
};

// El callback retorna ...
export const bucarHeroe = (id, callback) => {
  const heroe = heroes[id];
  if (heroe) {
    // En caso de que lo encuentre
    callback(null, heroe);
  } else {
    // Un error ...
    callback(`No existe un heroe con el id:${id}`);
  }
};

export const buscarVillano = (id, callback) => {
  const villano = villanos[id];
  if (villano) {
    callback(null, villano);
  } else {
    callback(`No se encontro el id de villano:${id}`);
  }
};
