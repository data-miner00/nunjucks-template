var uglifier = require("gulp-uglify");
var gulp = require("gulp");
var concat = require("gulp-concat");
var { JS_OUTFILE, JS_PATH, DIST_PATH } = require("./variables");

var uglify = function () {
  return gulp
    .src([`${JS_PATH}/**/*.js`])
    .pipe(concat(JS_OUTFILE))
    .pipe(uglifier())
    .pipe(gulp.dest(DIST_PATH));
};

module.exports = uglify;
