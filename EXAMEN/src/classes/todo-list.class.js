// EL PROCESO DE LA PAGINA (PARTE 2)

export class TodoList {
  constructor() {
    //Un arreglo vacio
    // this.todos = [];
    this.cargarLocalStorage();
  }

  nuevoTodo(todo) {
    //AGREGAR UN NUEVO VALOR EN TU ARREGLO(push)
    this.todos.push(todo);
    this.guardarLocalStorage();
  }

  elmininarTodo(id) {
    //Todo eso va regresar una nuevo arreglo
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.guardarLocalStorage();
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
        this.guardarLocalStorage();
        break;
      }
    }
  }

  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => !todo.completado);
    this.guardarLocalStorage();
  }

  guardarLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  cargarLocalStorage() {
    // if (localStorage.getItem("todo")) {
    //   //Convierte de JSON tipo String a JSON tipo object
    //   this.todos = JSON.parse(localStorage.getItem("todo"));
    //   console.log("cargarLocal:", this.todos);
    //   console.log(typeof this.todos);
    // } else {
    //   this.todos = [];
    // }

    this.todos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
  }
}
