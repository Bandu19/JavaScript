//MANDAR A LLAMAR LOS VALORES

// EL PROCESO DE LA PAGINA (PARTE 1)

/**
 * Punto donde se estara guardando
 * la información.
 *
 */
export class Todo {
  // Crear una nueva Instancia
  static fromJason({ id, tarea, completado, creado }) {
    // const tempTodo = new Todo(obj.tarea); //CREA UNA NUEVA INSTANCIA
    const tempTodo = new Todo(tarea);
    tempTodo.id = id;
    tempTodo.completado = completado;
    tempTodo.creado = creado;

    return tempTodo;
  }

  constructor(tarea) {
    this.tarea = tarea;
    this.id = new Date().getTime(); //12836871263
    this.completado = false;
    this.creado = new Date();
  }

  imprimirClase() {
    console.log(`${this.tarea} - ${this.id}`);
  }
}
