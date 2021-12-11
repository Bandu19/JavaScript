const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    clean: true,
  },
  /**
   * El module es el comienzo de la
   * configuración del webpack
   */
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        /**Desconosco */
        options: {
          sources: false,
          minimize: true, //reducción del codigo
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      inject: "body",
    }),
  ],
};
