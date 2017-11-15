import gulp         from 'gulp';
import precss       from 'precss';
import plumber      from 'gulp-plumber';
import postcss      from 'gulp-postcss';
import flexbugs     from 'postcss-flexbugs-fixes';
import autoprefixer from 'autoprefixer';
import mqpacker     from 'css-mqpacker';
import csso         from 'gulp-csso';
import rename       from 'gulp-rename';

gulp.task('style', () => {
  return gulp.src('src/css/style.css')
    .pipe(plumber())
    .pipe(postcss([
      precss,
      flexbugs,
      autoprefixer,
      mqpacker({
        sort: true
      })
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(csso({ restructure: false }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'));
});
