import { Todo } from "../classes";
import { todoList } from "../index";

// Referencia en el HTML
const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const btnButton = document.querySelector(".clear-completed");
const ulFiltros = document.querySelector(".filters");
const anchoFiltros = document.querySelectorAll(".filtro");

export const crearTodoHtml = (todo) => {
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
  </li> `;

  const div = document.createElement("div");
  div.innerHTML = htmlTodo;

  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

txtInput.addEventListener("keyup", (event) => {
  // console.log(event);
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    // console.log(".new todo:", txtInput.value);
    const nuevoTodo = new Todo(txtInput.value);
    todoList.nuevoTodo(nuevoTodo);
    crearTodoHtml(nuevoTodo);
    txtInput.value = "";
  }
});

divTodoList.addEventListener("click", (event) => {
  const nombreElemento = event.target.localName;
  const todoElemento = event.target.parentElement.parentElement;
  const todoId = todoElemento.getAttribute("data-id");

  if (nombreElemento.includes("input")) {
    todoList.marcarCompletado(todoId);
    todoElemento.classList.toggle("completed");
  } else if (nombreElemento.includes("button")) {
    // Aqui se elimina el arreglo
    todoList.eliminarTodo(todoId);

    // Aqui se vacia el input
    divTodoList.removeChild(todoElemento);
  }
});

btnButton.addEventListener("click", () => {
  todoList.eliminarCompletados();

  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const elemento = divTodoList.children[i];
    console.log("R:", elemento);

    // Si ese elemento tiene una clase = "completed"
    if (elemento.classList.contains("completed")) {
      divTodoList.removeChild(elemento);
    }
  }
});

ulFiltros.addEventListener("click", (event) => {
  console.log(event.target.text); // Pendientes, Completado, Todos

  const filtro = event.target.text;

  if (!filtro) {
    // Si esta vacio no devuelva nada
    return;
  }

  anchoFiltros.forEach((elem) => elem.classList.remove("selected"));

  event.target.classList.add("selected");

  for (const elemento of divTodoList.children) {
    /**
     *
     */
    elemento.classList.remove("hidden");

    const completado = elemento.classList.contains("completed");

    switch (filtro) {
      case "Pendientes":
        if (completado) {
          elemento.classList.add("hidden");
        }
        break;
      case "Completados":
        if (!completado) {
          elemento.classList.add("hidden");
        }
        break;
    }
  }
});
