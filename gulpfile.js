(function(){
	var gulp = require('gulp'),
		gutil = require('gulp-util'),
		uglify = require('gulp-uglify'),
		plumber = require('gulp-plumber'),
		cleanCSS = require('gulp-clean-css'),
		livereload = require('gulp-livereload');
	/**
	 * Minify CSS Task
	 */
	gulp.task('minify-css', function(){
		gulp.src('app/css/*.css')
			.pipe(cleanCSS())
			.pipe(gulp.dest('build/css/'))
			.pipe(livereload());
	});
	/**
	 * Scripts Task
	 * Minifies javascript files.
	 */
	gulp.task('scripts', function(){
		gulp.src('app/modules/**/*.js')
			// .pipe(plumber())
			.pipe(uglify())
			.pipe(gulp.dest('build/src'));
	});
	/**
	 * Watch Task
	 */	
	gulp.task('watch', function(){
		livereload.listen();
		gulp.watch('app/modules/**/*.js', ['scripts']);
		gulp.watch('app/css/*.css', ['minify-css']);
	});
	/**
	 * Default Task
	 * Runs all tasks.
	 */
	gulp.task('default', ['scripts', 'minify-css', 'watch']);

})();