var gulp =        require('gulp'),
    sass =        require('gulp-sass'),
    browserify =  require('browserify'),
    babelify =    require('babelify'),
    source =      require('vinyl-source-stream'),
    buffer =      require('vinyl-buffer'),
    browsersync = require('browser-sync').create();

    gulp.task('babel', function () {
      var b = browserify({
      entries: './src/js/app.js',
      debug: true,
    	transform: [babelify.configure({
    		  presets: ['babel-preset-es2015']
        })]
      });

      return b.bundle()
        .pipe(source('scripts.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./public/js/'))
        .pipe(browsersync.stream());
    });

    gulp.task('serve', ['sass', 'babel'], function() {
      browsersync.init({
        server: './public'
      });

      gulp.watch(['./src/sass/*.scss', './src/sass/**/*.scss'], ['sass']);
      gulp.watch(['./src/js/*.js', './src/js/**/*.js'], ['babel']);
      gulp.watch('./public/index.html').on('change', browsersync.reload);
    });

    gulp.task('sass', function(){
      return gulp.src('./src/sass/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./public/css'))
            .pipe(browsersync.stream());
    });

    gulp.task('default', ['serve']);
