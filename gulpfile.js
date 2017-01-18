// Gulpfile.js

var gulp = require('gulp'), 
	nodemon = require('gulp-nodemon');

gulp.task('start', function () {
  	nodemon({script: './server.js', ext: 'js hjs json', legacyWatch: true });
});