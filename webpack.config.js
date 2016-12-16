const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: __dirname,
  entry: "./js/app.js",
  output: {
    path: __dirname + '/js',
    filename: "pack.js"
  },
  devServer: {
    contentBase: './',
    inline: true
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css!' }
    ]
  }
}
