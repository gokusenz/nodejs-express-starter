// Gulpfile.js

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var shell = require('gulp-shell')

gulp.task('start', function () {
  nodemon({script: './server.js', ext: 'js hjs json', legacyWatch: true });
});

gulp.task('test', () => {
  console.log('It works!');
  gulp.watch(['test/**', 'lib/**'], ['unittest']);
});

gulp.task('unittest', shell.task([
  // 'NODE_ENV=test ./node_modules/.bin/mocha --colors test/unit'
  'NODE_ENV=test ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha test/unit',
]))

gulp.task('integration', shell.task([
  // 'NODE_ENV=test ./node_modules/.bin/mocha --colors test/integration'
  'NODE_ENV=test ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha test/integration',
]))

gulp.task('alltest', shell.task([
  'NODE_ENV=test ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha test/**',
]))