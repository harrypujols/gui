var gulp        = require('gulp'),
    webpack     = require('webpack-stream'),
    clean       = require('del'),
    browsersync = require('browser-sync').create();

    gulp.task('webpack', function() {
      gulp.src('./src/index.js')
        .pipe(webpack( require('./webpack.config.js') ))
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


    gulp.task('clean', function() {
      return clean(['./public/static/**/*', './public/index.html']);
    });

    gulp.task('build', ['static', 'html']);

    gulp.task('serve', ['build', 'webpack'], function() {
      browsersync.init({
        server: './public'
    });

      gulp.watch(['./src/index.html', './src/static/**/*'], ['build']);
      gulp.watch(['./src/sass/*.scss', './src/sass/**/*.scss'], ['webpack']);
      gulp.watch(['./src/js/*.js', './src/js/**/*.js'], ['webpack']);
      gulp.watch('./src/index.html').on('change', browsersync.reload);
    });

    gulp.task('default', ['serve']);
