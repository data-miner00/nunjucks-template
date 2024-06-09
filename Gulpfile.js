var gulp = require("gulp");
var { nunjucks, cssmin, uglify } = require("./tasks");

gulp.task(
  "default",
  gulp.parallel(
    nunjucks,
    cssmin,
    uglify /* Use Higher order function when parameter needed */
  )
);
