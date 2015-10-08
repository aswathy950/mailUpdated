// include gulp
var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  return gulp.src('./assets/js/*.js', './assets/plugin/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('styles', function(){
    return gulp.src('./assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/css/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('watch', function(){
    gulp.watch('./assets/js/*.js', ['scripts']);
    gulp.watch('./assets/scss/*.scss', ['styles']);
});
