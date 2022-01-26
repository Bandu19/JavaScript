import { Todo } from "../classes";
import { todoList } from "../index";
// Referencias en el HTML

const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");

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
