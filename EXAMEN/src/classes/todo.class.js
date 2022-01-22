//MANDAR A LLAMAR LOS VALORES

// EL PROCESO DE LA PAGINA (PARTE 1)

/**
 * Punto donde se estara guardando
 * la información.
 *
 */
export class Todo {
  constructor(tarea) {
    this.tarea = tarea;
    this.id = new Date().getTime(); //12836871263
    this.completado = false;
    this.creado = new Date();
  }
}
