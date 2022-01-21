export class Todo {
  constructor(tarea) {
    this.tarea = tarea;
    this.id = new Date().getTime(); //12836871263
    this.completado = false;
    this.creado = new Date();
  }
}
