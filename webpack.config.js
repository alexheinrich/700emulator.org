const path = require('path');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '_site'),
    filename: 'main.js'
  }
};