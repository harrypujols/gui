module.exports = {
  watch: true,
  output: {
    filename: 'scripts.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
            loader: 'style-loader'
        }, {
            loader: 'css-loader'
        }, {
            loader: 'sass-loader'
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'url-loader'
      },
      {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: 'url-loader'
      }
    ],
  }
}
