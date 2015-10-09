var gulp = require('gulp')
var uglify = require('gulp-uglifyjs')

gulp.task('uglify', function() {
  gulp.src('ng-perfect-scrollbar.js')
    .pipe(uglify('ng-perfect-scrollbar.min.js'))
    .pipe(gulp.dest('dist'))
})
