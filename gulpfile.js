const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-minify-css');
const jshintStyle = require('jshint-stylish');
const jsonlint = require('gulp-jsonlint');
const eslint = require('gulp-eslint');

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css/'));
});

// ESLint
gulp.task('lint', function () {
  return gulp.src(['**/*.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
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

gulp.task('test', ['jsonlint', 'lint']);
gulp.task('default', ['watch']);