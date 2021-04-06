const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;

const mode = "development";

process.env.BROWSERSLIST_ENV = mode;

module.exports = {
  entry: "./src/index.js",
  mode: mode,
  output: {
    filename: "bundle.js",
  },

  devtool: "inline-source-map",
  module: {
    rules: [
      // First Rule
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
    contentBase: "public/",
  },
};
