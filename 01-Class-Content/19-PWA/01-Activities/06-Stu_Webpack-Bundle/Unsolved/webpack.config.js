const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // TODO: Add a new set of rules to handle images 
  


  module: { 
    rules: [ 
      {
        test:/\.(png|jpe?g|gif)$/i,
        //test: /\.css$/i,
        type: 'asset/resource',
      },
    ],
  },
};
