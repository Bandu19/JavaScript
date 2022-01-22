// EL PROCESO DE LA PAGINA (PARTE 2)

export class TodoList {
  constructor() {
    //Un arreglo vacio
    this.todos = [];
  }

  nuevoTodo(todo) {
    //AGREGAR UN NUEVO VALOR EN TU ARREGLO(push)
    this.todos.push(todo);
  }

  elmininarTodo(id) {}

  marcarCompletado(id) {}

  eliminarCompletados() {}
}
