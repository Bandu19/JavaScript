// import { saludar } from "./js/componentes";
// const nombre = "Oscar";
// saludar(nombre);

/**  INDEX QUE CONECTA CON LA CARPETA
 *   (dist)
 *
 *
 *  ===> index (RAIZ) <===
 */

import "./styles.css";
//importación classes/index.js
import { Todo, TodoList } from "./classes";

const todoList = new TodoList(); //Muy importante

const tarea = new Todo("HOLA MUNDO");
const tarea2 = new Todo("SEGUNDO HOLA MUNDO");

todoList.nuevoTodo(tarea); //SE CREA EL ARREGLO
todoList.nuevoTodo(tarea2);

//IMPRIMIR ARREGLO
console.log("RESULTADO:", todoList);
