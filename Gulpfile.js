var gulp = require("gulp");
var nunjucks = require("gulp-nunjucks-render");

gulp.task("nunjucks", function () {
  return gulp
    .src("src/*")
    .pipe(nunjucks({ path: ["src/templates"], ext: ".html" }))
    .pipe(gulp.dest("dist"));
});

gulp.task("manual", function (done) {
  console.log("works");
  done();
});

gulp.task("promise", async function () {
  console.log("works");
});

gulp.task("stream", function () {
  return gulp.src("/src/*").pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.parallel("nunjucks", "manual"));
