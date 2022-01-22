// EL PROCESO DE LA PAGINA (PARTE 2)

export class TodoList {
  constructor() {
    this.todos = [];
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
  }

  eliminarTodo(id) {}

  //A LA PAR
  marcarCompletado(id) {}

  eliminarCompletados() {}
}
