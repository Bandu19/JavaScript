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

  elmininarTodo(id) {
    //Todo eso va regresar una nuevo arreglo
    this.todos = this.todos.filter((todo) => todo.id != id);
  }

  marcarCompletado(id) {
    //SACAMOS EL ID de cada palabra
    for (const todo of this.todos) {
      console.log("Clase todo-list:", id, todo.id);

      //si el id es igual al this.todos
      //si es igual al numero:
      if (todo.id == id) {
        // FALSE        =  TRUE
        todo.completado = !todo.completado;
        break;
      }
    }
  }

  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completado);
  }

  guardarLocalStorage() {}

  cargarLocalStorage() {}
}
