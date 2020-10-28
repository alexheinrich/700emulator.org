const path = require('path');
module.exports = {
  entry: './js/scripts.js',
  output: {
    path: path.resolve(__dirname, '_site/js'),
    filename: 'scripts.js'
  }
};