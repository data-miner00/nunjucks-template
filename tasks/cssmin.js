var gulp = require("gulp");
var cleancss = require("gulp-clean-css");
var concat = require("gulp-concat");

var cssmin = function () {
  return gulp
    .src(["src/styles/**/*.css"])
    .pipe(concat("styles.css"))
    .pipe(cleancss({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist"));
};

module.exports = cssmin;
