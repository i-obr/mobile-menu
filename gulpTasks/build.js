import gulp  from 'gulp';
import run   from 'run-sequence';

gulp.task('build', () => {
  run(
      'clean',
      ['copy:fonts', 'copy:img', 'html', 'style', 'images', 'copy:scripts'],
      'symbols',
      'scripts',
      'deploy'
    );
});
