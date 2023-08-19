const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = ({ mode }) => {
  return {
    mode,
    resolve: {
      extensions: [".js"],
    },
    entry: "./src/index.js",
    output: {
      filename: "dist.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        }
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
      new CopyWebpackPlugin({
        patterns: [
            { from: 'src/images' , to: "images"},
        ]
     })

    ],
  };
};