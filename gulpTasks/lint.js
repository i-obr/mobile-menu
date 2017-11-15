import gulp     from 'gulp';
import htmlhint from 'gulp-htmlhint';
import sassLint from 'gulp-sass-lint';

gulp.task('lint:html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.failReporter());
});

gulp.task('lint:sass', () => {
  return gulp.src('src/sass/**/*.{scss,sass}')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('lint', ['lint:sass', 'lint:html']);
