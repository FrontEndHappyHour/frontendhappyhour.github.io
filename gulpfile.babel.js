const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const nodeunit = require('gulp-nodeunit');
const jshintStyle = require('jshint-stylish');
const jsonlint = require('gulp-jsonlint');
const eslint = require('gulp-eslint');
const svgmin = require('gulp-svgmin');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const beautify = require('gulp-beautify');
const source = require('vinyl-source-stream');
const merge = require('merge-stream');
const log = require('fancy-log');


gulp.task('sass', () => gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/css/'))
);

gulp.task('svgmin', () => gulp.src('public/img/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('./public/img/'))
);

// ESLint
gulp.task('lint', () => gulp.src(['**/*.js', '!node_modules/**', '!public/js/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

// JSON Lint
gulp.task('jsonlint', () => gulp.src(['./content/*.json', './*.json'])
    .pipe(jsonlint())
    .pipe(jsonlint.reporter(jshintStyle))
);

// nodeunit tests
gulp.task('nodeunit', () => gulp.src('tests/**/*.js')
    .pipe(nodeunit({
      reporter: 'junit',
      reporterOptions: {
        output: 'test-output'
      }
    }))
);

gulp.task('beautify-html', () => gulp.src('./**/*.html')
  .pipe(beautify.html({ indent_size: 2 })) // eslint-disable-line camelcase
  .pipe(gulp.dest('.'))
);

// build javascript bundles
gulp.task('javascript', done => {
  const jsxPath = './jsx/';
  const files = ['home', 'panelist'];
  let i = 0;
  const streams = files.map(fileName => {
    const fullFile = jsxPath + fileName + '.jsx';
    const bundler = browserify({
      extensions: ['.js', '.jsx'],
      transform: [['babelify', { presets: ['react', 'es2015'], plugins: ['transform-class-properties', 'syntax-dynamic-import'] }]]
    });

    bundler.add(fullFile);

    const stream = bundler.bundle();
    stream.on('error', err => log.error(err));

    stream
      .pipe(source(fullFile))
      .pipe(rename(fileName + '.js'))
      .pipe(gulp.dest('public/js/'));
    log(`${fileName}.js created`);
    i++;
    if(i === files.length) {
      done();
    }
  });
  return merge.apply(streams);
});

gulp.task('compress', done => {
  gulp.src('./public/js/*.js')
    .pipe(uglify())
    .on('error', err => log.error(err))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('./public/js/min/'));
    done();
  });

gulp.task('scripts', gulp.series(['javascript', 'compress']));

gulp.task('watch', done => {
  gulp.watch('sass/**/*.scss', gulp.series(['sass']));
  //gulp.watch(['**/*.js', '!node_modules/**'], ['lint', 'nodeunit']);
  gulp.watch(['./jsx/**/*'], gulp.series(['scripts']));
  done();
});

gulp.task('test', gulp.series(['jsonlint']));

gulp.task('build', gulp.parallel(['scripts', 'sass', 'svgmin', 'beautify-html']));

gulp.task('default', gulp.series(['build', 'test', 'watch']));
