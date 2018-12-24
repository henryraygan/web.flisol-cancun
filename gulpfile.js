'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('styles', function () {
  return gulp.src('./src/scss/master.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'));
});
 

gulp.task('default', function() {
  gulp.watch('./src/scss/**/*.scss', gulp.series('styles'));
})