import gulp from 'gulp';
import sass from 'gulp-sass';
import minifyCSS from 'gulp-minify-css';
import nodeunit from 'gulp-nodeunit';
import jshintStyle from 'jshint-stylish';
import jsonlint from 'gulp-jsonlint';
import eslint from 'gulp-eslint';
import svgmin from 'gulp-svgmin';
import browserify from 'browserify';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import source from 'vinyl-source-stream';
import merge from 'merge-stream';
import log from 'fancy-log';

gulp.task('sass', () => gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
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

// build javascript bundles
gulp.task('javascript', done => {
  const jsxPath = './jsx/';
  const files = ['home'];
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
    if (i === files.length) {
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

gulp.task('scripts', gulp.series(['lint', 'javascript', 'compress']));

gulp.task('watch', done => {
  gulp.watch('sass/**/*.scss', gulp.series(['sass']));
  //gulp.watch(['**/*.js', '!node_modules/**'], ['lint', 'nodeunit']);
  gulp.watch(['./jsx/**/*'], gulp.series(['scripts']));
  done();
});

gulp.task('test', gulp.series(['jsonlint', 'lint', 'nodeunit']));

gulp.task('build', gulp.parallel(['scripts', 'sass', 'svgmin']));

gulp.task('default', gulp.series(['build', 'test', 'watch']));
