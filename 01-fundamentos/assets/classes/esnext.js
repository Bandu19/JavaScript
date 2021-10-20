class Rectangulo {
  /**
   * La propiedad de la clase #area
   * se convierte en PRIVADA y esto lo hace
   * para no modificar nada.
   *
   *
   * Lamentablemente para JavaScript aun faltan
   * metodos privados, si se puede pero no son
   * mundialmente aceptadas.
   */
  #area = 0;
  constructor(base = 0, altura = 0) {
    this.base = base;
    this.altura = altura;
    /**LA FORMULA DEL AREA */
    this.#area = base * altura;
  }
  calcularArea() {
    console.log(this.#area * 2);
  }
}
const rectangulo = new Rectangulo(10, 15);
/**
 * Es decir que esto no lo puedo manipular porque es
 * una propiedad privada
 */
// rectangulo.#area = 100;

/**
 * CONSOLA
 */
rectangulo.calcularArea();
console.log(rectangulo);
