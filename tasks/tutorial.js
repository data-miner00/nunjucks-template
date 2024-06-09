var gulp = require("gulp");

function manual(done) {
  console.log("works manual");
  done();
}

async function promise() {
  console.log("works promise");
}

function stream() {
  return gulp.src("/src/*").pipe(gulp.dest("dist"));
}

module.exports = {
  manual,
  promise,
  stream,
};
