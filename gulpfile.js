const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-minify-css');
const nodeunit = require('gulp-nodeunit');
const jshintStyle = require('jshint-stylish');
const jsonlint = require('gulp-jsonlint');
const eslint = require('gulp-eslint');
const svgmin = require('gulp-svgmin');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('svgmin', function () {
    return gulp.src('public/img/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./public/img/'));
});

// ESLint
gulp.task('lint', function () {
  return gulp.src(['**/*.js', '!node_modules/**', '!public/js/**/*.js'])
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

// nodeunit tests
gulp.task('nodeunit', function () {
  gulp.src('tests/**/*.js')
    .pipe(nodeunit({
      reporter: 'junit',
      reporterOptions: {
        output: 'test-output'
      }
    }));
});

// build javascript bundles
gulp.task('javascript', function() {
 const jsxPath = './jsx/';
 const files = ['home', 'panelist', 'episode'];
 const streams = files.map(function(fileName) {
  const fullFile = jsxPath + fileName + '.jsx';
  const bundler = browserify({
    extensions: ['.js', '.jsx'],
    transform: ['babelify']
  });

  bundler.add(fullFile);

  const stream = bundler.bundle();
  stream.on('error', function (err) { console.error(err.toString()); });

  stream
    .pipe(source(fullFile))
    .pipe(rename(fileName + '.js'))
    .pipe(gulp.dest('public/js/'));
  console.log(`${fileName}.js created`)
 });
  
});

gulp.task('compress', function() {
  return gulp.src('./public/js/*.js')
    .pipe(uglify())
    .pipe(rename({
       extname: '.min.js'
     }))
    .pipe(gulp.dest('./public/js/min/'));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  //gulp.watch(['**/*.js', '!node_modules/**'], ['lint', 'nodeunit']);
  gulp.watch(['./jsx/**/*'], ['lint', 'javascript', 'compress']);
});

gulp.task('test', ['jsonlint', 'lint', 'nodeunit']);
gulp.task('default', ['watch']);