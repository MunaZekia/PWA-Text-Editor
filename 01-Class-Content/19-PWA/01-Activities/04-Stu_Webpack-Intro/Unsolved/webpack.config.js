const path = require('path');
//const path = require('path'); is a Node.js module that allows us to use the path of our files and directories in our code.

module.exports = {
  mode: 'development',// mode is a property that tells webpack to use its built-in optimizations accordingly.
  entry: './src/js/index.js',// entry is a property that tells webpack where to start and follow the graph of dependencies to know what files and modules to include in its bundle.
  output: { // output is a property that tells webpack where to emit the bundles it creates and how to name these files.
    filename: 'main.js',// filename is a property that tells webpack to use this name for the created bundle.
    path: path.resolve(__dirname, 'dist'),// path is a property that tells webpack to emit the bundles it creates into a directory named dist.
  },
};
