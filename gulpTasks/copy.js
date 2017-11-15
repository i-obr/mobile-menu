import gulp from 'gulp';

gulp.task('copy:fonts', () => {
  return gulp.src('src/fonts/**/*{woff,woff2}')
    pipe(gulp.dest('build/fonts'));
});

gulp.task('copy:html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build/'));
});

gulp.task('copy:img', () => {
  return gulp.src('src/img/**')
    .pipe(gulp.dest('build/img'));
});
