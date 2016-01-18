var gulp = require('gulp');
var browserify = require('browserify');
var riotify = require('riotify');
var source = require('vinyl-source-stream');
var browsersync = require("browser-sync");

gulp.task('concat', function () {
  return browserify({
    debug: true,
    // this is an array of all entry points
    // where Browserify starts to look for
    // dependencies
    entries: ['./src/main.js'],
    // list of transforms that are supported
    // riotify needs .tag file name extension
    // to support tag compilation
    transform: [riotify]
    //transform: [riotify, { template: 'jade' }]
  }).bundle()
  // take the end result and place it to dist folder
  .pipe(source('main.bundle.js'))
  .pipe(gulp.dest('./dest/'))
  .pipe(browsersync.stream());
});

gulp.task('server', function () {
  browsersync.init({
    server: {
      baseDir: 'dest'
    },
    open: false,
  });
});


gulp.task('default', ['server'], function() {
  gulp.watch("./dest/*", function() {
    browsersync.reload();
  });
  gulp.watch("./src/**/*.js", ['concat']);
  gulp.watch("./src/**/*.tag", ['concat']);
});