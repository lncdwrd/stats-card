const { src, dest, watch, series, parallel } = require('gulp');

const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const purgecss = require('gulp-purgecss');
const browsersync = require('browser-sync').create();
const tailwindcss = require("tailwindcss");



// Html Task
function htmlTask() {
  return src('./src/*.html')
    .pipe(dest('./dist'));
}

// Css Task
function cssTask() {
  return src('./src/css/**/*.css', { sourcemaps: true })
  .pipe(postcss([
    require('tailwindcss')
  ]))
  .pipe(autoprefixer())
  .pipe(concat('main.css'))
  .pipe(dest('./dist/css', { sourcemaps: './' }));
}

// Javascript Task
function jsTask() {
  return src('./src/scripts/*.js', { sourcemaps: true })
    .pipe(concat('bundle.js'))
    .pipe(terser())
    .pipe(dest('./dist/scripts', { sourcemaps: './' }));
}

// Purge Task
function purgeTask() {
  return gulp.src('dist/**/*.css')
  .pipe(purgecss({
    content: ['dist/**/*.html']
  }))
  .pipe(cssnano())
  .pipe(concat('main.css'))
  .pipe(gulp.dest('dist/css'))
}

// Assets Task
function assetsTask() {
  return src('./src/assets/*')
    .pipe(imagemin())
    .pipe(dest('./dist/assets'));
}

// Browsersync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: './dist'
    }
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch('./src/*.html', series(htmlTask, browsersyncReload))
  watch('./src/css/*.css', series(cssTask, browsersyncReload));
  watch('./*.js', series(cssTask, browsersyncReload));
  watch('./src/scripts/**/*.js', series(jsTask, browsersyncReload));
  watch('./src/assets/*', series(assetsTask, browsersyncReload));
} 

// Default Gulp Task
exports.default = series(
  htmlTask,
  cssTask,
  jsTask,
  assetsTask,
  browsersyncServe,
  watchTask
);
exports.purge = purgeTask;