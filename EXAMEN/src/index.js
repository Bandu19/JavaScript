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

//-------------> CLASE 116 <---------------------
/***
 * ESTA SECCIÓN trata de que al final de acabo
 * tus resultados que tengas en la consola son objetos literarios
 * es decir que no son arrays y por lo tanto se crea un metodo estatico
 * y un metodo llamado "map" para devolver un arreglo con todo sus
 * valores.
 *
 */
// const newTodo = new Todo("Aprender JavaScript");
// todoList.nuevoTodo(newTodo);

//EN LA posición cualquiera
// todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();

console.log("todos:", todoList.todos);
