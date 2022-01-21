//IMPORTAMOS AQUI LOS PLUGINS PARA SU USO
const HtmlWebpackPlugin = require("html-webpack-plugin");
//IMPORTAMOS EL PLUGIN (CLASE 91)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//IMPORTAMOS EL PLUGIN (CLASE 93)
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development", // Desarrollo
  output: {
    clean: true, //Limpia y actualiza en tu carpeta de dis/
  },

  //MODULE es como tal parte de la configuración.

  module: {
    rules: [
      /**correra cada vez que encuentre un HTML con el comando
       * npm run build
       */
      /**CONDICIÓN */
      {
        /**
         * BUSCARA TODO LO QUE SON HTML
         * (/\.html$/).
         *
         * (i): Sirve para que busque
         * si son minusculas o mayusculas
         *
         */
        test: /\.html$/i, //SI LO ENCUENTRA PASA A LA SIGUIENTE LIENA DE COMANDO
        /**Si lo encuentra LLAMAREMOS
         * al plugin (html-loader)*/
        loader: "html-loader",
        options: {
          sources: false,
          // minimize: true, //reducción del codigo
        },
      },
      /**CONDICIÓN */
      {
        test: /\.css$/i, //BUSCA TODOS LOS CSS
        exclude: /styles.css$/,
        /**El (use) sirve para decir
         * que estamos utilizando los
         * plugins.
         */
        use: ["style-loader", "css-loader"],
        /** */
      },

      /**CONDICIÓN */
      {
        /**Aqui ya cambia bastante
         * ya no busssca un archivo que tenga
         * extencion ya sea .html o .css
         * si no ya es un archivo especifico
         */
        test: /styles.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        /** Dentro del contenido test
         *  se refiere que puede aprobar
         *  cualquier imagen que se
         * le indica en este caso
         * acepta imagenes tipo png,
         *  jpg y gif. */
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
      },
    ],
  },
  /**OPTIMIZACIÓN */
  optimization: {},

  /*PLUGIS */
  plugins: [
    /** CONFIGURANDO UNA NUEVA INSTANCIA */
    new HtmlWebpackPlugin({
      // title: "Mi WebPack App", PUEDES MODIFICAR EL TITULO DE TU INDEX.HTML de la carpeta dist
      filename: "./index.html", //Cambia el nombre
      template: "./src/index.html", //Sirve para identificar el archivo html que queremos modificar
      inject: "body", //Hace que el script se inserte en el body y no en el head
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      ignoreOrder: false,
    }),
    //CLASE 93 COPYPLUGIN
    new CopyPlugin({
      /**(FROM): Significa donde estas
       * tomando esa carpeta
       * y
       * (To): Se refiere como se mostrara
       * en la carpeta (dis/).
       */
      patterns: [{ from: "src/assets/", to: "assets/" }],
    }),
  ],
};
