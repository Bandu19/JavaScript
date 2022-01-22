// Referencias en el HTML

const divTodoList = document.querySelector(".todo-list");

export const crearTodoHtml = (todo) => {
  /** Esto es una creación tipo String */
  const htmlTodo = `
  <li class="${todo.completado ? "completed" : ""}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${todo.completado ? "checked" : ""}>
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
	</li> 
  `;

  /**Crea el elemento HTML */

  const div = document.createElement("div");
  div.innerHTML = htmlTodo;

  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};