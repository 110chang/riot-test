var gulp = require('gulp');
var browserify = require('browserify');
var riotify = require('riotify');
var source = require('vinyl-source-stream');
var browsersync = require("browser-sync");

gulp.task('concat', function () {
  return browserify({
    debug: true,
    entries: ['./src/main.js']
  }).transform([riotify])
    .bundle()
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