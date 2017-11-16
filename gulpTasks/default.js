import gulp  from 'gulp';
import run   from 'run-sequence';

gulp.task('default', () => {
  run(
      'clean',
      ['copy:fonts', 'html', 'copy:img', 'style', 'images', 'copy:scripts'],
      'scripts',
      'server',
      'watch'
    );
});
