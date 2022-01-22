//ESTE ES EL MAS IMPORTANTE DE LA RAMA
import "./styles.css";
/**
 * Aqui llamamoss a las importaciones
 * del archivo /src/classes/index.js
 */
import { Todo, TodoList } from "./classes";

const todoList = new TodoList();

//
const tarea = new Todo("Aprender JavaScrip");
const tarea2 = new Todo("Comprar un unicornio");
// console.log(tarea);

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

console.log(todoList);
