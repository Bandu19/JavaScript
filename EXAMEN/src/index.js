import "./styles.css";
import { imagen, saludar } from "./js/componentes";
import { saludar2 } from "./js/componentes";

import { Todo } from "./classes/todo.class";

// const nombre = "OSCAR";
// const nombre2 = "GUSTAVO";
// const nombre3 = "ACUÑA";

// saludar(nombre);
// saludar2(nombre2);
// imagen(nombre3);

const tarea = new Todo("Aprender JavaScrip");

console.log(tarea);
