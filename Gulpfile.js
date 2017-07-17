'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const babel = require('babelify');
const source = require('vinyl-source-stream');
const watchify = require('watchify');
const browserify = require('browserify');

const publicDirectory = __dirname + '/public';

gulp.task('images', function() {
  gulp.src('./lib/images/*')
      .pipe(gulp.dest(publicDirectory + '/images'))
});


gulp.task('styles', function() {
  gulp.src('./lib/css/index.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(rename('index.css'))
      .pipe(gulp.dest(publicDirectory))
})

gulp.task('watch', function() { return compile(true) });

function compile(watch) {
  let bundle = watchify(browserify('./lib/js/index.js'));

  function rebundle() {
    bundle
    .transform(babel, {presets: ["env"]})
    .bundle()
    .on('error', function(error) {
      console.log(error);
      this.emit('end');
    })
    .pipe(source('index.js'))
    .pipe(rename('index_bundle.js'))
    .pipe(gulp.dest(publicDirectory))
  }

if (watch) {
  bundle.on('update', function() {
    console.log("==> Bundling rombogram...")
   rebundle();
  })
 }
 rebundle();
}


gulp.task('default', ['images', 'styles', 'watch'])
