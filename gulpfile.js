const gulp = require('gulp');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const htmlmin = require('gulp-htmlmin')
const templateCache = require('gulp-angular-templatecache');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const clean = require('gulp-clean-css');
const server = require('./');
const http = require('http');
const reload = require('reload');

gulp.task('clean', (cb) => {
    return del(['dist/**/*'], cb);
});

gulp.task('build:css', ['clean'], () => {
    return gulp.src('src/**/*.css')
        .pipe(clean({ compatibility: 'ie8' }))
        .pipe(concat('bundle.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build:js', ['clean'], () => {
    return gulp.src([
            'src/app/*.js',
            'src/app/services/**/*.js',
            'src/app/controllers/**/*.js',
            'src/app/directives/**/*.js',
        ])
        .pipe(uglify())
        .pipe(concat('bundle.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build:html', ['clean'], () => {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build:templates', ['clean'], () => {
    return gulp.src('src/app/templates/**/*.html')
        .pipe(templateCache({ module: 'tabrath', root: '/templates' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build:img', ['clean'], () => {
    return gulp.src('src/img/**/*')
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('build', ['clean', 'build:css', 'build:js', 'build:html', 'build:templates', 'build:img'], () => { });

var reloadServer;

gulp.task('reload', ['watch'], (cb) => {
    reloadServer.reload();
    cb();
});

gulp.task('watch', ['build'], () => {
    if (!reloadServer) {
        reloadServer = reload(server.server, server.app);

        server.server.listen(server.app.get('port'), server.app.get('host'), () => {
            console.log('Server listening on port ' + server.app.get('port'));
        });
    }
    return gulp.watch('src/**/*', ['build', 'reload']);
});

gulp.task('default', ['build'], () => { });