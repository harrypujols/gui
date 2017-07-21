var gulp =        require('gulp'),
    sass =        require('gulp-sass'),
    browserify =  require('browserify'),
    babelify =    require('babelify'),
    source =      require('vinyl-source-stream'),
    buffer =      require('vinyl-buffer'),
    browsersync = require('browser-sync').create();

gulp.task('babel', function () {
  var b = browserify({
  entries: './js/index.js',
  debug: true,
	transform: [babelify.configure({
		  presets: ['babel-preset-es2015']
    })]
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./js/'))
    .pipe(browsersync.stream());
});

gulp.task('serve', ['sass', 'babel'], function(){
  browsersync.init({
    server: './'
  });

  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch(['./js/*.js', './js/**/*.js'], ['babel']);
  gulp.watch('./*.html').on('change', browsersync.reload);
});

gulp.task('sass', function(){
  return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browsersync.stream());
});

gulp.task('default', ['serve']);
