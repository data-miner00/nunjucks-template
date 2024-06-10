var gulp = require("gulp");
var { nunjucks, cssmin, uglify } = require("./tasks");
var { CSS_PATH, JS_PATH, SRC_PATH } = require("./tasks/variables");
var connect = require("gulp-connect");

gulp.task(
  "default",
  gulp.parallel(
    nunjucks,
    cssmin,
    uglify /* Use Higher order function when parameter needed */
  )
);

gulp.task("watch", function watchTask(done) {
  gulp.watch(`${CSS_PATH}/*`, gulp.series(cssmin));
  gulp.watch(`${JS_PATH}/*`, gulp.series(uglify));
  gulp.watch(`${SRC_PATH}/**/*.njk`, gulp.series(nunjucks));
  done();
});

gulp.task("connect", function () {
  connect.server({
    root: "dist",
    livereload: true,
  });
});

gulp.task("live", gulp.series("watch", "connect"));
