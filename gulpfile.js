var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var htmlmin = require('gulp-htmlmin');
var minifyjs = require('gulp-js-minify');

gulp.task('default', function () {
    // Endless stream mode
    var plugins = [
        autoprefixer({browsers: ['last 3 version']}),
        cssnano()
    ];

    gulp.watch('src/*.css',['css'])

    gulp.watch('src/*.html',['html'])

    gulp.watch('src/*js',['js']);
});

gulp.task('html', function() {
  return gulp.src('src/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./'));
});

gulp.task('css', function () {
    var plugins = [
        autoprefixer({browsers: ['last 3 version']}),
        cssnano()
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});
gulp.task('js', function(){
    gulp.src('./src/*.js')
      .pipe(minifyjs())
      .pipe(gulp.dest('./dest'));
  });