import gulp         from 'gulp';
import browserSync  from 'browser-sync';

gulp.task('server', () => {
  browserSync.init({
    server: 'build',
    notify: false,
    open: true,
    ui: false
  });
});
