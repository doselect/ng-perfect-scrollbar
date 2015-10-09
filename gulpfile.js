var gulp = require('gulp')
var uglify = require('gulp-uglifyjs')

gulp.task('uglify', function() {
  gulp.src('*.js')
    .pipe(uglify('ng-perfect-scrolbar.min.js'))
    .pipe(gulp.dest('dist'))
})
