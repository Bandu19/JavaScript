const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    /**
     * ESTE HACE QUE LIMPIE O ACTUALIZE TODO
     * TU CARPETA DE TU DIST
     */
    clean: true,
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
          minimize: false,
        },
      },
    ],
  },
  plugins: [
    /** CONFIGURANDO UNA NUEVA INSTANCIA */
    new HtmlWebPackPlugin({
      // title: "Mi WebPack App", PUEDES MODIFICAR EL TITULO DE TU INDEX.HTML de la carpeta dist
      template: "./src/index.html",
      /**
       * ESTO CONFIGURA EL NOMBRE DE TU ARCHIVO
       * QUE ESTARA DENTRO DE LA CARPETA dist
       */
      filename: "./index.html",
    }),
  ],
};
