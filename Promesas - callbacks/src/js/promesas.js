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
  setTimeout(() => reject("Promesa Rapida"), 1000);
});

// Otra forma de llamar funciones

export { promesaLenta, promesaMedia, promesaRapida };
