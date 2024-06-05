var gulp = require("gulp");

gulp.task("default", function (done) {
  console.log("works");
  done();
});

gulp.task("promise", async function () {
  console.log("works");
});

gulp.task("stream", function () {
  return gulp.src("/src/*").pipe(gulp.dest("dist"));
});
