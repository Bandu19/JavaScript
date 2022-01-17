import "../css/componentes.css";
// import webpacklogo from "../assets/img/webpack-logo(1).png";
/**
 * "export" es para mandar a llamar una función tipo flecha
 * a otra ruta donde esta la manda a llamar.
 */
export const saludar = (nombre) => {
  console.log("Creando etiqueta h1");

  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");

  h1.innerHTML = `Hola, ${nombre}`;
  h2.innerHTML = `Clase 89 Webpack Dev Server(${nombre})`;
  document.body.append(h1);
  document.body.append(h2);

  //IMG
  // console.log(webpacklogo);
  // const img = document.createElement("img");
  // img.src = webpacklogo;
  // document.body.append(img);
};
