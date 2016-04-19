const gulp = require('gulp'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  nano = require('gulp-cssnano'),
  child = require('child_process'),
  util = require('gulp-util'),
  bSync = require('browser-sync').create();

const cssFiles = '_sass/**/*.?(s)css';
const siteRoot = '_site';

gulp.task('css', function() {
  gulp.src(cssFiles)
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('_site/css/'))
});

gulp.task('nano', function() {
  return gulp.src('_site/css/main.css')
    .pipe(nano({
      autoprefixer: {
        add: true,
        browsers: ['last 2 versions']
      }
    }))
    .pipe(gulp.dest('_site/css/'))
});

gulp.task('jekyll', function() {
  const jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);
  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => util.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('jekyllProduce', function() {
  const jekyll = child.spawn('jekyll', ['build',
    '--config',
    '_config_production.yml',
  ]);
  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => util.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', function() {
  bSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });
  gulp.watch(cssFiles, ['css']);
});

gulp.task('default', ['css', 'nano', 'jekyll', 'serve']);
gulp.task('produce', ['css', 'nano', 'jekyllProduce']);
