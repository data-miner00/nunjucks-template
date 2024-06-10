var uglifier = require("gulp-uglify");
var gulp = require("gulp");
var concat = require("gulp-concat");
var { JS_OUTFILE, JS_PATH, DIST_PATH } = require("./variables");
var connect = require("gulp-connect");

var uglify = function () {
  return gulp
    .src([`${JS_PATH}/**/*.js`])
    .pipe(concat(JS_OUTFILE))
    .pipe(uglifier())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(connect.reload());
};

module.exports = uglify;
