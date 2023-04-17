const path = require("path");
const webpack = require("webpack");
const childProcess = require("child_process");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpeg|jpg|gif|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.png/,
        type: "asset/inline",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
      Build Date : ${new Date().toLocaleString()}
      Commit Version : ${childProcess.execSync("git rev-parse --short HEAD")}
      Author : ${childProcess.execSync("git config user.name")}
      `,
    }),
    new webpack.DefinePlugin({}),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
