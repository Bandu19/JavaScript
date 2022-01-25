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

  marcarCompletado(id) {
    for (const todo of this.todos) {
      console.log(id, todo.id);

      //si el id es igual al this.todos
      if (todo.id == id) {
        // FALSE        =  TRUE
        todo.completado = !todo.completado;
        break;
      }
    }
  }

  eliminarCompletados() {}
}
