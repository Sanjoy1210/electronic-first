// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

// module.exports = ({ mode }) => {
//   return {
//     mode,
//     resolve: {
//       extensions: [".js"],
//     },
//     entry: "./src/index.js",
//     output: {
//       filename: "dist.js",
//       assetModuleFilename: "[name].[ext]",
//     },
//     module: {
//       rules: [
//         {
//           test: /\.css$/,
//           use: [MiniCssExtractPlugin.loader, "css-loader"],
//         },
//         {
//           test: /\.scss$/,
//           use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
//         },
//         {
//           test: /\.(png|jpe?g|gif|svg)$/i,
//           use: [
//             {
//               loader: "file-loader",
//               options: {
//                 name: "[name].[ext]",
//                 outputPath: "images", // Output directory for images
//               },
//             },
//           ],
//         },
//       ],
//     },
//     plugins: [
//       new webpack.ProgressPlugin(),
//       new MiniCssExtractPlugin(),
//       new HtmlWebpackPlugin({
//         template: "src/index.html",
//       }),
//     ],
//   };
// };


const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
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
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
          generator: {
            filename: "images/[name][ext]",
          },
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
    ],
  };
};