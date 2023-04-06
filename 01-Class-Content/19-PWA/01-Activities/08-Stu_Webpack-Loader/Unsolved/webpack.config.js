const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
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
          // this loader is used to transpile the code
          // in this case, it is used to transpile the code from ES6 to ES5. which means it will convert the code to a version that is compatible with older browsers
          // ES6 is the latest version of JavaScript
          // ES5 is the version of JavaScript that is compatible with older browsers
          //plug-ins are used to add additional functionality to the loader, it 
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
 }; 
