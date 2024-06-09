var uglifier = require("gulp-uglify");
var gulp = require("gulp");
var concat = require("gulp-concat");

var uglify = function () {
  return gulp
    .src(["src/scripts/**/*.js"])
    .pipe(concat("scripts.js"))
    .pipe(uglifier())
    .pipe(gulp.dest("dist"));
};

module.exports = uglify;
