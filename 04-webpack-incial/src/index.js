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
/**
 * importación ./classes/index.js
 */
import { Todo, TodoList } from "./classes";
/**
 * importación ./js/componentes
 */
import { crearTodoHtml } from "./js/componentes";

export const todoList = new TodoList(); //Muy importante
