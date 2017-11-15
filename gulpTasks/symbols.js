import gulp      from 'gulp';
import svgmin    from 'gulp-svgmin';
import svgstore  from 'gulp-svgstore';
import rename    from 'gulp-rename';

gulp.task('symbols', () => {
  return gulp.src('build/img/icons/*.svg')
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('symbols.svg'))
    .pipe(gulp.dest('build/img'));
});
