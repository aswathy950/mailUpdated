// include gulp
var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// default task

gulp.task('scripts_chat', function() {
  return gulp.src('./app/chat/assets/js/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./app/build/js/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./app/build/js/'));
});

gulp.task('scripts_mail', function() {
  return gulp.src('./app/mail/assets/js/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./app/build/js/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./app/build/js/'));
});

gulp.task('styles_chat', function(){
    return gulp.src('./app/chat/assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/build/css/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./app/build/css/'));
});

gulp.task('styles_mail', function(){
    return gulp.src('./app/mail/assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/build/css/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./app/build/css/'));
});

gulp.task('watch', function(){
    gulp.watch('./app/chat/assets/js/*.js, ./app/mail/assets/js/*.js', ['scripts_chat']);
    gulp.watch('./app/chat/assets/scss/*.scss, ./app/mail/assets/scss/*.scss', ['styles_chat']);
    gulp.watch('./app/mail/assets/js/*.js, ./app/mail/assets/js/*.js', ['scripts_mail']);
    gulp.watch('./app/mail/assets/scss/*.scss, ./app/mail/assets/scss/*.scss', ['styles_mail']);
});
