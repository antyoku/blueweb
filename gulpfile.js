const gulp = require('gulp');
const fileExists = require('file-exists');
const pug = require('gulp-pug');
const favicons = require('gulp-favicons');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const watch = require('gulp-watch');
const template = require('gulp-template');
const plumber = require('gulp-plumber');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const getCSV = require('get-csv');
const rename = require('gulp-rename');
const pugLinter = require('gulp-pug-linter');
const notify = require('gulp-notify');

gulp.task('pug', () => {
  gulp.src('./src/pug/pages/**/[^_]*.pug')
    .pipe(plumber())
    .pipe(pugLinter())
    .pipe(pugLinter.reporter(notify.onError('Pug Lint Error')))
    .pipe(pug({
      basedir: './src/pug',
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', () => {
  gulp.src('./src/scss/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(cleanCSS({
      level: 2,
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', () => {
  return gulp.src('./src/js/entry.js')
    .pipe(webpack({
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015'],
            },
          },
        ],
      },
      output: {
        filename: 'bundle.js',
      },
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('image', () =>
  gulp.src('./src/images/**/*')
    .pipe(cache(imagemin({
      progressive: true,
      interlaced: true,
    })))
    .pipe(gulp.dest('dist/imgs'))
);

gulp.task('create-blank-pages', () => {
  getCSV('./pages.csv')
    .then((rows) => {
      rows.forEach((page) => {
        page.path += page.path.match(/\/$/) ? '' : '/';
        page.path += 'index.pug';

        if (fileExists.sync('./src/pug/pages' + page.path)) {
          return true;
        }

        gulp.src('./src/pug/lib/_template.pug')
          .pipe(template({
            title: page.title,
          }))
          .pipe(rename(page.path))
          .pipe(gulp.dest('./src/pug/pages', {overwrite: false}));
      });
    });
});

gulp.task('favicon', () => {
  gulp.src('./src/favicon*')
    .pipe(favicons({
      appName: 'Demo Site',
      appDescription: 'Site description',
      developerName: 'developer name',
      developerURL: 'https://hoge/',
      background: '#ffffff',
      path: '/',
      url: 'https://hoge/',
      start_url: '/',
      theme_color: '#2AB1D1',
      lang: 'ja',
      display: 'standalone',
      orientation: 'portrait',
      version: 1.0,
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['build'], () => {
  watch('./src/css/**/*.scss', () => {
    gulp.start('sass');
  });
  watch('./src/html/**/*.pug', () => {
    gulp.start('pug');
  });
  watch('./src/imgs/**/*', () => {
    gulp.start('image');
  });
  watch('./src/js/**/*.js', () => {
    gulp.start('js');
  });
  watch('./dist/**', () => {
    browserSync.reload();
  });
});

gulp.task('serve', ['watch'], () => {
  browserSync.init({
    open: true,
    ghostMode: false,
    server: {
      baseDir: './dist',
    },
  });
});

gulp.task('build', ['pug', 'sass', 'js', 'image', 'favicon']);
gulp.task('default', ['serve']);
