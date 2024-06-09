var gulp = require("gulp");
var cleancss = require("gulp-clean-css");
var concat = require("gulp-concat");
var { CSS_PATH, CSS_OUTFILE, DIST_PATH } = require("./variables");

var cssmin = function () {
  return gulp
    .src([`${CSS_PATH}/**/*.css`])
    .pipe(concat(CSS_OUTFILE))
    .pipe(cleancss({ compatibility: "ie8" }))
    .pipe(gulp.dest(DIST_PATH));
};

module.exports = cssmin;
