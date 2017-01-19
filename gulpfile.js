// Gulpfile.js

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const shell = require('gulp-shell');

gulp.task('start', () => {
  nodemon({ script: './server.js', ext: 'js hjs json', legacyWatch: true });
});

gulp.task('test', () => {
  gulp.watch(['test/**', 'app/**', 'app/*/**'], ['unittest']);
});

gulp.task('unittest', shell.task([
  // 'NODE_ENV=test ./node_modules/.bin/mocha --colors test/unit'
  'NODE_ENV=test ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha test/unit',
]));

gulp.task('integration', shell.task([
  // 'NODE_ENV=test ./node_modules/.bin/mocha --colors test/integration'
  'NODE_ENV=test ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha test/integration',
]));

gulp.task('alltest', shell.task([
  'NODE_ENV=test ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha test/**',
]));
