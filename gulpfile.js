var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch');
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    postcss = require('gulp-postcss'),
    mqpacker = require('css-mqpacker'),
    sortCSSmq = require('sort-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('cssnano'),
    csscomb = require('postcss-csscomb'),
    uncss = require('postcss-uncss'),
    del = require('del');

// pug
gulp.task('pug', function () {
  return watch(['src/**/*.pug'], function () {
    gulp.src(['src/pages/**/*.pug', '!src/pages/_template/**/*.pug'])
      .pipe(pug({
        pretty: true
      })).on('error', notify.onError(function (error) { return 'Pug: ' + error.message;}))
      .pipe(rename({dirname: ''}))
      .pipe(gulp.dest('build/'))
      .pipe(browserSync.reload({stream: true}));
  });
});


// sass
gulp.task('sass', function () {
  return watch('src/**/*.{sass,scss}', function () {
    gulp.src([
        'src/sass/libs.{sass,scss}',
        'src/sass/vars.{sass,scss}',
        'src/sass/include-media.scss',
        'src/sass/iconfonts.scss',
        'src/sass/mixin.{sass,scss}',
        'src/sass/**/*.{sass,scss}',
        'src/base.blocks/**/*.{sass,scss}',
        'src/common.blocks/**/*.{sass,scss}',
        'src/pages/**/*.{sass,scss}',
      ])
      .pipe(sourcemaps.init())
      .pipe(concat('index.scss'))
      .pipe(sass({outputStyle: 'compressed'})).on('error', notify.onError(function (error) { return 'Sass: ' + error.message;}))
      // .pipe(sass()).on('error', notify.onError(function (error) { return 'Sass: ' + error.message;}))
      .pipe(autoprefixer({browsers: ['last 15 versions', 'ie 10']}))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('build/css/'))
      .pipe(browserSync.reload({stream: true}));
  });
});

// postcss
gulp.task('postcss', function () {
  return gulp.src('build/css/index.css')
    .pipe(postcss([
      csscomb(require('./.csscomb.json')),
      mqpacker({
        sort: sortCSSmq.desktopFirst
      }),
      // cssnano(),
      // uncss({
      // 	html: ['build/*.html']
      // }),
    ]))
    .pipe(gulp.dest('build/css/'));
})


// js
gulp.task('js', function () {
  return watch('src/**/*.js', function () {
    gulp.src([
      'src/js/polyfill/*.js',
      'src/js/main.js',
      // _libs
      'src/_libs/waypoints/waypoints.min.js',
      // _libs
      'src/base.blocks/**/*.js',
      'src/common.blocks/**/*.js'
    ])
      .pipe(concat('scripts.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('build/js'))
      .pipe(browserSync.reload({stream: true}));
  });
});

// image
gulp.task('image', function () {
  return watch('src/**/*.{png,jps,svg}', function () {
    gulp.src([
      'src/base.blocks/**/*.{png,jpg,svg}',
      'src/common.blocks/**/*.{png,jpg,svg}',
      'src/pages/**/*.{png,jpg,svg}'
    ])
      .pipe(rename({dirname: ''}))
      .pipe(gulp.dest('build/img'))
  });
});

// server
gulp.task('browser-sync', function () {
  browserSync({
		server: {
      baseDir: 'build',
      index: 'build/home.html',
      directory: true
		},
		notify: false
	});
});


// clear build
gulp.task('clear', function () {
  del.sync([
    'build/*.html',
    'build/css',
    'build/js',
  ])
});

// default
gulp.task('default', ['pug', 'sass', 'js', 'image', 'browser-sync']);
