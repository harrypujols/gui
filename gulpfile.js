var gulp =        require('gulp'),
    webpack =     require('webpack-stream'),
    browsersync = require('browser-sync').create();

    gulp.task('webpack', function() {
      gulp.src('./src/index.js')
        .pipe( webpack({
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
              }
            ],
          }
        }))
        .pipe(gulp.dest('./public/js'));
    });

    gulp.task('serve', ['webpack'], function() {
      browsersync.init({
        server: './public'
      });

      gulp.watch(['./src/sass/*.scss', './src/sass/**/*.scss'], ['webpack']);
      gulp.watch(['./src/js/*.js', './src/js/**/*.js'], ['webpack']);
      gulp.watch('./public/index.html').on('change', browsersync.reload);
    });

    gulp.task('default', ['serve']);
