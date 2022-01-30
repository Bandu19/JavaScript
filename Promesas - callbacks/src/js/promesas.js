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

// Sin utilizar el Async
export const buscarHeroe = (id) => {
  const heroe = heroes[id];

  // Retorno a una promesa
  /**
   * resolve : Se resuelve la promesa
   *
   * reject : Cuando la promesa fracasa
   */
  return new Promise((resolve, reject) => {
    if (heroe) {
      //Se pueden agregar mas argumentos
      // siempre y cuando estes llamando a otro objeto.
      resolve(heroe);
    } else {
      reject(`No existe un heroe con el id:${id}`);
    }
  });
};

//  Utilizar el Async
export const buscarHeroeAsync = async (id) => {
  const heroe = heroes[id];
  if (heroe) {
    return heroe;
  } else {
    throw `No existe un heroe con el id:${id}`;
  }

  // Dos formas de trabajar con el "Reject"
  //1.- throw Error`No existe un heroe con el id:${id}`; // REFIENDOSE A ERRORES DE CODIGO
};

/**
 * Entre mas rapida sea la "Promise" sera la primea
 * en ejecutarse
 */
const promesaLenta = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa Lenta"), 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa Media"), 1500);
});
const promesaRapida = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa Rapida"), 1000);
});

// Otra forma de llamar funciones

export { promesaLenta, promesaMedia, promesaRapida };
