// include gulp
var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// default task

gulp.task('scripts', function() {
  return gulp.src('./public/app/assets/js/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/app/build/js/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./public/app/build/js/'));
});

gulp.task('styles', function(){
    return gulp.src('./public/app/assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/app/build/css/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./public/app/build/css/'));
});

gulp.task('watch', function(){
    gulp.watch('./public/app/assets/js/*.js', ['scripts']);
    gulp.watch('./public/app/assets/scss/*.scss', ['styles']);
});
