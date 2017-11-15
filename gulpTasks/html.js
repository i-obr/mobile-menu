import gulp              from 'gulp';
import nunjucksRender    from 'gulp-nunjucks-render';
import plumber           from 'gulp-plumber';
import gulpif            from 'gulp-if';
import changed           from 'gulp-changed';
import prettify          from 'gulp-prettify';
import frontMatter       from 'gulp-front-matter';
import notify            from 'gulp-notify';

function errorHandler() {
    const args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>',
        sound: 'Submarine'
    }).apply(this, args);
    this.emit('end');
};

function renderHtml(onlyChanged) {
    nunjucksRender.nunjucks.configure({
        watch: false,
        trimBlocks: true,
        lstripBlocks: false
    });

    return gulp.src('src/html/**/[^_]*.html')
        .pipe(plumber({
          errorHandler: errorHandler
        }))
        .pipe(gulpif(onlyChanged, changed('build')))
        .pipe(frontMatter({ property: 'data' }))
        .pipe(nunjucksRender({
          path: ['src/html/']
        }))
        .pipe(prettify({
            indent_size: 2,
            wrap_attributes: 'auto', // 'force'
            preserve_newlines: false,
            end_with_newline: true
        }))
        .pipe(gulp.dest('build/'));
}

gulp.task('html', () => renderHtml());

gulp.task('html:changed', () => renderHtml(true));
