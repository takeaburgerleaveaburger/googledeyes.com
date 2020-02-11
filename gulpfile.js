var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('styles', function(done) {
	/* Sass it up, pack it up */
	gulp.src('sass/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./'));

	done();
});

gulp.task('html', function(done) {
	done();
});

gulp.task('php', function(done) {
	done();
});


gulp.task('js', function(done) {
	done();
});

gulp.task('watch:scss', function(done) {
	return gulp.watch('sass/**/*.scss',gulp.series('styles')).on('change', reload);
});

gulp.task('watch:html', function(done) {
	return gulp.watch('**/*.html',gulp.series('html')).on('change', reload);
});

gulp.task('watch:php', function(done) {
	return gulp.watch('**/*.php',gulp.series('php')).on('change', reload);
});

gulp.task('watch:js', function(done) {
	return gulp.watch('js/**/*.js',gulp.series('js')).on('change', reload);
});

gulp.task('sync', function(done) {
	browserSync.init({
		proxy: 'googledeyes.local',
		browser: 'google chrome',
		port: 3022
	});

	done();
});

gulp.task('watch', gulp.parallel('watch:js', 'watch:scss', 'watch:php', 'watch:html'));

gulp.task('default', gulp.series('sync', 'watch'));