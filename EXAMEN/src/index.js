//ESTE ES EL MAS IMPORTANTE DE LA RAMA
import "./styles.css";
/**
 * Aqui llamamoss a las importaciones
 * del archivo /src/classes/index.js
 */
import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";

/**ESTA VARIABLE LLAMA todo lo que tiene
 * la clase */
export const todoList = new TodoList();

todoList.todos.forEach((todo) => crearTodoHtml(todo));

// const tarea = new Todo("Aprender JavaScrip");

// todoList.nuevoTodo(tarea);

// console.log("ARREGLO:", todoList);
// console.log("RESULTADO2:", tarea);

// crearTodoHtml(tarea);

// LocalStorage y SessionsStorage

// localStorage.setItem("mi-key", "ABC123");
// sessionStorage.setItem("mi-key", "ABC123");

// setTimeout(() => {
//   localStorage.removeItem("mi-key");
// }, 1500);
