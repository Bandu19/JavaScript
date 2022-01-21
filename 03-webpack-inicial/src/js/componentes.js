import "../css/componentes.css";
//IMPORTACIÓN DE UNA IMAGEN
import webpacklogo from "../assets/img/webpack-logo(1).png";
export const saludar = (nombre) => {
  console.log("Creando etiqueta h1");

  const h1 = document.createElement("h1");
  h1.innerHTML = `Hola,${nombre}`;

  document.body.append(h1);
};

//EJEMPLO
export const saludar2 = (nombre) => {
  console.log("Creando Ejemplo");
  const h2 = document.createElement("h2");
  h2.innerHTML = `Hola,${nombre}`;
  document.body.append(h2);

  //img

  //AQUI IMPORTAMOS UNA IMAGEN
  console.log(webpacklogo);
  const img = document.createElement("img");
  img.src = webpacklogo; //SRC = sources
  document.body.append(img);
};
