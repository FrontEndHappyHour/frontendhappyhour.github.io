var gulp        = require('gulp'),
  sass          = require('gulp-sass'),
  minifyCSS     = require('gulp-minify-css'),
  rename        = require('gulp-rename'),
  path          = require('path');

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);