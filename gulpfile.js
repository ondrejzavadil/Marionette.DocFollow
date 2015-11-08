var browserify = require('gulp-browserify'),
    del = require('del'),
    gulp = require('gulp'),
    gulpSequence = require('gulp-sequence');

var path = {
  scripts: ['js/**/*.js'],
  build: 'build'
};

gulp.task('clean', function () {
  return del(['build']);
});

gulp.task('scripts', function () {
  gulp.src('js/**/*.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function(){
  gulp.watch(path.scripts, ['scripts']);
});

gulp.task('default', function (cb) {
  gulpSequence('clean', 'scripts', 'watch', cb);
});
