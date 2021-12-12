const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    /**
     * ESTE HACE QUE LIMPIE O ACTUALIZE TODO
     * TU CARPETA DE TU DIST
     */
    clean: true, //Limpia todo lo que tienes en tu carpeta dist/
  },

  module: {
    rules: [
      {
        /**correra cada vez que encuentre un HTML con el comando
         * npm run build
         */
        //_    _/\.html$/i (EXPRESION REGULAR)  _//
        test: /\.html$/i,
        /**Si lo encuentra LLAMAREMOS a la dependencia (html-loader)*/
        loader: "html-loader",
        options: {
          /** */
          sources: false,
          // minimize: true, //reducción del codigo
        },
      },
      /**
       * CONFIGURACION DE LA IMPORTACION PARA CSS a JS
       */
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  /**
   * Esto configura la constante que se
   * declaro al comienzo del codigo
   *
   * por otra parte aqui modifcas todo
   * lo que quieres hacer con tu archivo
   * que esta dentro de la carpeta dist/
   */
  plugins: [
    /** CONFIGURANDO UNA NUEVA INSTANCIA */
    new HtmlWebPackPlugin({
      // title: "Mi WebPack App", PUEDES MODIFICAR EL TITULO DE TU INDEX.HTML de la carpeta dist
      template: "./src/index.html", //Sirve para identificar el archivo html que queremos modificar
      /**
       * ESTO CONFIGURA EL NOMBRE DE TU ARCHIVO
       * QUE ESTARA DENTRO DE LA CARPETA dist
       */
      filename: "./index.html", //Cambia el nombre
      inject: "body", //Hace que el script se inserte en el body y no en el head
    }),
  ],
};
