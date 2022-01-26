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
  marcarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completado = !todo.completado;
        break;
      }
    }
  }

  eliminarCompletados() {}
}
