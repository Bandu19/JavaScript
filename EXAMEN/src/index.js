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
const todoList = new TodoList();

const tarea = new Todo("Aprender JavaScrip");

todoList.nuevoTodo(tarea);

console.log("ARREGLO:", todoList);
console.log("RESULTADO2:", tarea);

crearTodoHtml(tarea);