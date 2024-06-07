var gulp = require("gulp");
var nunjucks = require("gulp-nunjucks-render");
var data = require("gulp-data");

var manageEnv = function (environment) {
  environment.addFilter("split", function (str, delim) {
    return str.split(delim) ?? [];
  });
};

gulp.task("nunjucks", function () {
  return gulp
    .src("src/*")
    .pipe(
      data(function (file) {
        return require("./settings.json");
      })
    )
    .pipe(nunjucks({ path: ["src/templates"], ext: ".html", manageEnv }))
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
