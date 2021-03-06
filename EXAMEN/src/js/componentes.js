import { Todo } from "../classes";
import { todoList } from "../index";
// Referencias en el HTML

const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const btnBorrar = document.querySelector(".clear-completed");
const ulFiltros = document.querySelector(".filters");
const anchoFiltros = document.querySelectorAll(".filtro"); // VAMOS a preguntar por este filtro

export const crearTodoHtml = (todo) => {
  /** Esto es una creación tipo String */
  const htmlTodo = `
  <li class="${todo.completado ? "completed" : ""}" data-id="${todo.id}">
      <div class="view">
        <input class="toggle" type="checkbox" ${
          todo.completado ? "checked" : ""
        }>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
  </li> 
  `;

  /**Crea el elemento HTML */

  const div = document.createElement("div");
  div.innerHTML = htmlTodo;
  /**Esto es con la finalidad de que
   * el firstElementChild imprima su hijo
   * y el padre no se inserte en el html
   * es decir que el hijo(li) se imprimira
   * todo lo que tiene pero el padre se
   * imprimira tambien pero no se visualizara
   *
   */
  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

// Eventos
/**
 * Evento que se escuchara es "keyup"
 * es decir cuando la persona suelta la tecla
 * y cuando la suelta la tecla
 *
 * va disparar una accion que son las llaves
 * {}
 *
 *
 * El "event" va decir que tecla presiono
 * el usuario.
 */

txtInput.addEventListener("keyup", (event) => {
  //TECLADO
  // console.log(event);

  if (event.keyCode === 13 && txtInput.value.length > 0) {
    // console.log("Entro");
    console.log(txtInput.value); //LETRA
    // console.log(txtInput.value.length); // N° Total de las letras
    const nuevoTodo = new Todo(txtInput.value);
    // console.log("obejeto", nuevoTodo);
    todoList.nuevoTodo(nuevoTodo);
    console.log("ARRAY", todoList);

    crearTodoHtml(nuevoTodo);
    txtInput.value = "";
    // console.log("R= ", nuevoTodo.tarea);
  }
});

// divTodoList.addEventListener("click", (event) => {
//   console.log("click");
//   console.log(event);
// });

divTodoList.addEventListener("click", (event) => {
  //LOS CLICKS
  // console.log("click");
  /**IDENTIFICA QUE CUANDO ESTAS
   * DANDO CLICK
   * te manda en consola lo que
   * tienes dentro de .target.localName
   * principalmente te arroja que tipos
   * de Html estas seleccionando.
   *
   * (CLASE 111).
   * console.log(event.target.localName);
   */

  const nombreElemento = event.target.localName; // input, label, button
  const todoElemento = event.target.parentElement.parentElement;
  //ATRIBUTO ES = "data-id"
  const todoId = todoElemento.getAttribute("data-id");

  console.log("Resultado:", todoElemento);
  console.log("Obteniendo ID:", todoId);

  // Ajustes del input
  // click en el check
  if (nombreElemento.includes("input")) {
    //aqui le mandamos un string en la clase "todo-list.class.js"
    todoList.marcarCompletado(todoId);
    // Hacer referencia a todas las clases
    // con "classList".
    todoElemento.classList.toggle("completed");

    console.log("todoElemento:", todoElemento);
    /**
     *
     */
  } else if (nombreElemento.includes("button")) {
    //Hay que borrar el Todo
    todoList.elmininarTodo(todoId);
    divTodoList.removeChild(todoElemento); //removeChild
  }

  console.log("R:", todoList);
});

btnBorrar.addEventListener("click", () => {
  //aqui se envia a la clase TodoList
  todoList.eliminarCompletados();
  console.log("R2:", todoList);

  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const elemento = divTodoList.children[i];
    console.log(elemento, "NUMERO:", i);
    // Si ese elemento tiene una clase = "completed"
    if (elemento.classList.contains("completed")) {
      divTodoList.removeChild(elemento);
    }
  }
});

ulFiltros.addEventListener("click", (event) => {
  console.log(event.target.text);
  const filtro = event.target.text;

  // Si el filtro tiene algo

  //  ESTE SIRVE PARA QUE NO DEVUELVA NADA un divTodoList.children
  if (!filtro) {
    return;
  }

  // Contiene una Clase HTML
  anchoFiltros.forEach((elem) => elem.classList.remove("selected")); // CLASE HTML
  console.log(event.target);

  event.target.classList.add("selected");

  for (const elemento of divTodoList.children) {
    // console.log(elemento);

    // Esto es para los "Completados"
    // En caso de que no cumpla con los switch(condición)
    // removera la clase hidden
    elemento.classList.remove("hidden");

    // el contains es para referirse si tiene la clase completed
    const completado = elemento.classList.contains("completed");

    // Si quiero mostrar los completados o no

    // En filtro te llegara ya sea "Pendientes", "Completados"
    switch (filtro) {
      case "Pendientes": // SI ENCUENTRA Pendientes
        // a todos los elementos que no estan completados
        // FALSE
        if (completado) {
          elemento.classList.add("hidden");
        }
        break;
      case "Completados":
        // A todos los elementos que estan completados
        // TRUE
        if (!completado) {
          elemento.classList.add("hidden");
        }
        break;
    }
  }
});
