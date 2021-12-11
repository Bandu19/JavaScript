/**
 * "export" es para mandar a llamar una función tipo flecha
 * a otra ruta donde esta la manda a llamar.
 */
export const saludar = (nombre) => {
  console.log("Creando etiqueta h1");

  const h1 = document.createElement("h1");

  h1.innerHTML = `Hola, ${nombre}`;

  document.body.append(h1);
};
