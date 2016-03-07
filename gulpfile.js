(function(){
	var gulp = require('gulp'),
		gutil = require('gulp-util'),
		uglify = require('gulp-uglify'),
		plumber = require('gulp-plumber'),
		cleanCSS = require('gulp-clean-css'),
		livereload = require('gulp-livereload'),
		changed = require('gulp-changed'),
		htmlmin = require('gulp-htmlmin'),
		inject = require('gulp-inject'),
		file_sort = require('gulp-angular-filesort'),
		DEST = 'build/css/',
		SRC = 'app/css/*.css';
	/**
	 * Inject Angular Module Files
	 */
	gulp.task('inject-files', function(){
		var sources = gulp.src(['./app/modules/**/*.module.js', 
								'./app/modules/**/*.controller.js', 
								'./app/css/*.css'], {read: false});
		
		return gulp.src('./index.html')
					.pipe(inject(sources,{
						addRootSlash: false
					})).pipe(gulp.dest('./'));
	});
	/**
	 * Minify CSS Task
	 */
	gulp.task('minify-css', function(){
		return gulp.src(SRC)
			.pipe(changed(DEST))
			.pipe(cleanCSS())
			.pipe(gulp.dest(DEST))
			.pipe(livereload());
	});
	/**
	 * Task - Minify HTML Files
	 */
	gulp.task('minify-html', function(){
		return gulp.src('*.html')
				   .pipe(htmlmin({collapseWhitespace: true}))
				   .pipe(gulp.dest('build/'))
				   .pipe(livereload());
	});
	/**
	 * Scripts Task
	 * Minifies javascript files.
	 */
	gulp.task('minify-js', function(){
		return gulp.src('app/modules/**/*.js')
			// .pipe(plumber())
			.pipe(uglify())
			.pipe(gulp.dest('build/src'));
	});
	/**
	 * Watch Task
	 */	
	gulp.task('watch', function(){
		livereload.listen();
		gulp.watch('app/modules/**/*.js', ['inject-files']);
		gulp.watch('app/css/*.css', ['inject-files'])
	});
	/**
	 * Default Task
	 * Runs all tasks.
	 */
	gulp.task('default', ['inject-files', 'watch']);

})();