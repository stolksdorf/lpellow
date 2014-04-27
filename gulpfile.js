var gulp = require('gulp');
var less = require('gulp-less');
var browserify = require('gulp-browserify');

var server = require('./server');



gulp.task('server', function(){
	server.start();
});

gulp.task('html', function(){
	gulp.src('src/**/*.html')
		.pipe(gulp.dest('./public'))
})

gulp.task('styles', function(){
	gulp.src('src/index.less')

		.pipe(less({
			compress : true,
			sourceMap : true
		}).on('error', function(err) { console.log('WOAH', err);}))
		.pipe(gulp.dest('./public'))

});

gulp.task('scripts', function() {
	/*
	gulp.src('src/index.js')
		.pipe(browserify({
			debug : true
		}))
		.pipe(gulp.dest('./public'))
		*/
});

gulp.task('assets', function(){

})


gulp.task('watch', function(){
	gulp.watch('src/**/*.less', ['styles']);
	gulp.watch('src/**/*.js', ['scripts']);
	gulp.watch('src/**/*.html', ['html']);
});

gulp.task('build', ['html', 'styles', 'scripts'])

gulp.task('default', ['build', 'server', 'watch'])