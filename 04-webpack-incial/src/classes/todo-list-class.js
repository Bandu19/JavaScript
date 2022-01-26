// EL PROCESO DE LA PAGINA (PARTE 2)

export class TodoList {
  constructor() {
    // this.todos = [];
    this.cargarLocalStorage();
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    // Despues de que insertamos al arreglo vacio
    // se guardan los cambios
    this.guardarLocalStorage();
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.guardarLocalStorage();
  }

  //A LA PAR
  marcarCompletado(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
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

  //-----------------> CLASE (115) <----------------------------

  guardarLocalStorage() {
    // Guardar en el LocalStorage en JSON tipo String el arreglo

    //Para conservar tu arreglo en la carpeta(LocalStorage)
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  cargarLocalStorage() {
    // Para conservar los datos en el LocalStorage(arreglo)
    // aqui se conserva en HTML los cambios.
    /***
     * Al principio no existira dentro del localStorage
     * el valor todo es por eso que toda la información
     * sera almacenada dentro del "else"
     */
    if (localStorage.getItem("todo")) {
      this.todos = JSON.parse(localStorage.getItem("todo")); // STRING a Object
      console.log("cargarLocal:", this.todos);
      console.log(typeof this.todos);
    } else {
      this.todos = [];
    }
  }
}
