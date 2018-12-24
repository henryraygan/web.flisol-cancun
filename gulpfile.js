'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/master.css'));
});
 
gulp.task('sass', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});