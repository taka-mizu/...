var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

var config = require('../config');

gulp.task('webserver', () => {
	connect.server({
		root: config.dest,
		livereload: true,
		host: process.env.HOST || 'localhost',
		port: process.env.PORT || 8888
	});
});

gulp.task('livereload', () => {
	gulp.src(config.dest + '/**/*.*')
			.pipe(watch(config.dest + '/**/*.*'))
			.pipe(connect.reload());
});