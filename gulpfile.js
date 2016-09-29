const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('js', () => {
  gulp.src(['./js/app.js', './js/**/*.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('.public//dist'));
});

gulp.task('css', () => {
  gulp.src('./styles/**/*.{css, scss}')
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./public/dist'));
});

gulp.task('default', ['js', 'css']);

gulp.watch(['./js/**/*.js'], ['js']);
gulp.watch(['./styles/**/*.{css, scss}'], ['css']);
