/** EXPORT SIRVE PARA
 * MANDAR TU CONSTANTE O FUNCION A OTRA
 * CLASE O PAGINA DONDE LO ESTA LLAMANDO.
 */
export const saludar = (nombre) => {
  console.log("Creadno etiqueta h1");
  const h1 = document.createElement("h1");
  h1.innerText = `Hola, ${nombre}`;

  document.body.append(h1);
};
