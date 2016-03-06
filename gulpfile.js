(function(){
	var gulp = require('gulp'),
		gutil = require('gulp-util'),
		uglify = require('gulp-uglify');

	gulp.task('default', function(){
		gulp.src('app/modules/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/src'));
	})
})();