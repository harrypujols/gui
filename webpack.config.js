var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./js/app.js",
  output: {
    path: __dirname + '/js',
    filename: "pack.js"
  }
}
