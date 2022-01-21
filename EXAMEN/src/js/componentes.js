import "../css/componentes.css";

//IMPORTAR IMAGEN

import webpack from "../assets/img/webpack-logo(1).png";

//PROCESO
export const saludar = (nombre) => {
  console.log("Creando Ejemplo");
  const h1 = document.createElement("h1");
  h1.innerHTML = `Este es el EXAMEN ${nombre}`;
  document.body.append(h1);
};

export const saludar2 = (nombre) => {
  console.log("Creando Ejemplo2");
  const h2 = document.createElement("h2");
  h2.innerHTML = `Este es el Examen ${nombre}`;
  document.body.append(h2);
};

export const imagen = (nombre) => {
  console.log("Creando Ejemplos");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  h3.innerHTML = `Este es el examen ${nombre}`;
  img.src = webpack;

  document.body.append(h3);
  document.body.append(img);
};
