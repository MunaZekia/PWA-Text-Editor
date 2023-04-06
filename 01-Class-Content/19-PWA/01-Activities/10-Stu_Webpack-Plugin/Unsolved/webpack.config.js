// TODO: Implement the MiniCssExtractPlugin
// by adding it to the plugins array and replacing the style-loader with the MiniCssExtractPlugin.loader.
// we can add plugins array in webpack.config.js file 

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Webpack Plugin',


    }),
    new MiniCssExtractPlugin(),
    
    
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        // we're changing the style-loader to MiniCssExtractPlugin.loader. because we want to extract the css file from the js file to the dist folder
        //use: ['style-loader', 'css-loader'],
        //we are using mini-css-extract-plugin because it is more efficient than style-loader
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};

//
