import gulp         from 'gulp';
import uglify       from 'gulp-uglify';
import source       from 'vinyl-source-stream';
import browserify   from 'browserify';
import buffer       from 'vinyl-buffer';
import babel        from 'babelify';

gulp.task('scripts', () => {
  let bundler = browserify('src/js/index.js', { debug: true }).transform(babel);
  return bundler
    .bundle()
    .on('error', function(err) { console.error(err); this.emit('end'); })
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});
