const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./assets/js/index.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "TODOs List",
      }),

      new GenerateSW(),

      new WebpackPwaManifest({
<<<<<<< HEAD
        // TODO: Add an array of files to precache
        // 

        name: 'TODOs List',
        short_name: 'TODOs',
        description: 'An application that allows you to create a list of TODOs!',
        background_color: '#01579b',
        crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
        icons: [
          {src: path.resolve('assets/images/icons/icon-512x512.png'),

            sizes: [96, 128, 192, 256, 384, 512] // multiple sizes

          }
        ]
        // TODO: Create a manifest.json:
=======
        name: "TODOs",
        short_name: "TODOs",
        description: "Keep track of important tasks!",
        background_color: "#7eb4e2",
        theme_color: "#7eb4e2",
        start_url: "./",
        publicPath: "./",
        icons: [
          {
            src: path.resolve("assets/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
>>>>>>> ff118074d4e2f50e017d41115e1489c070ba77d1
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
