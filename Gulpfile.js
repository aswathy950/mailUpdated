// include gulp
var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');


// default task
var paths = {
  sass: ['./assets/scss/*.scss'],
  javascript: [
    './build/js/*.js',
    './assets/plugin/*.js'
    ],
      css: [
        './build/css/*.css'
      ]
};

// default task
gulp.task('index', function(){
    return gulp.src('./mail/views/login.html')
        .pipe(inject(
            gulp.src(paths.javascript,
                {read: false}), {relative: true}))
        .pipe(gulp.dest('./mail/views/'));
        // .pipe(inject(
        //     gulp.src(paths.sass,
        //       {read: false}), {relative: true}))
        // .pipe(gulp.dest('./'));
});

gulp.task('default', ['sass', 'index']);

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch([
      paths.javascript,
      paths.css
    ], ['index']);
});


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

// gulp.task('watch', function(){
//     gulp.watch('./assets/js/*.js', ['scripts']);
//     gulp.watch('./assets/scss/*.scss', ['styles']);
// });
