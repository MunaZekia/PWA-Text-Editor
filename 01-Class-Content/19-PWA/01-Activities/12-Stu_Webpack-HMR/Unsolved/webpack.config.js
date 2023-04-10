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
  devServer : {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    // port 8080 is the default port for webpack-dev-server
    //webpack-dev-server will serve our files from the dist folder
    hot: 'only',
    // we use hot module replacement, 
    //so we don't need to refresh the page
  },
  // TODO: Add devServer object
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Hot Module Reloading'
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
