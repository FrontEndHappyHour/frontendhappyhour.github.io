var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var path = require('path');
var jshintStyle = require('jshint-stylish');
var jsonlint = require('gulp-jsonlint');

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css/'));
});

// JSON Lint
gulp.task('jsonlint', function() {
  return gulp.src(['./content/*.json', './*.json'])
    .pipe(jsonlint())
    .pipe(jsonlint.reporter(jshintStyle));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('test', ['jsonlint']);
gulp.task('default', ['watch']);