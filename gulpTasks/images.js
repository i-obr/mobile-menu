import gulp         from 'gulp';
import imagemin     from 'gulp-imagemin';

gulp.task('images', () => {
  return gulp.src('build/img/**/*.{png,jpg,gif}')
    .pipe(imagemin([
      imagemin.optipng({ optimizationLever: 3 }),
      imagemin.jpegtran({ progressive: true })
    ]))
    .pipe(gulp.dest('build/img'));
});
