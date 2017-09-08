var gulp        = require('gulp'),
    webpack     = require('webpack-stream'),
    clean       = require('del'),
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
              },
              {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader'
                ]
              },
              {
                 test: /\.(woff|woff2|eot|ttf|otf)$/,
                 use: [
                   'file-loader'
                 ]
              }
            ],
          }
        }))
        .pipe(gulp.dest('./public/js'));
    });

    // --- Build ---

    gulp.task('static', function () {
        gulp.src('./src/static/**/*')
            .pipe(gulp.dest('./public/static'));
    });

    gulp.task('html', function () {
        gulp.src('./src/index.html')
            .pipe(gulp.dest('./public'));
    });

    gulp.task('data', function () {
        gulp.src('./src/data/*')
            .pipe(gulp.dest('./public/data'));
    });

    gulp.task('clean', function() {
      return clean(['./public/static/**/*', './public/data/*', './public/index.html']);
    });

    gulp.task('build', ['static', 'html', 'data']);

    gulp.task('serve', ['build', 'webpack'], function() {
      browsersync.init({
        server: './public'
    });

      gulp.watch(['./src/index.html', './src/static/**/*', './src/data/*'], ['build']);
      gulp.watch(['./src/sass/*.scss', './src/sass/**/*.scss'], ['webpack']);
      gulp.watch(['./src/js/*.js', './src/js/**/*.js'], ['webpack']);
      gulp.watch('./src/index.html').on('change', browsersync.reload);
    });

    gulp.task('default', ['serve']);
