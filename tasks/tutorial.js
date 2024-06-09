var gulp = require("gulp");
var { SRC_PATH, DIST_PATH } = require("./variables");

function manual(done) {
  console.log("works manual");
  done();
}

async function promise() {
  console.log("works promise");
}

function stream() {
  return gulp.src(`${SRC_PATH}/*`).pipe(gulp.dest(DIST_PATH));
}

module.exports = {
  manual,
  promise,
  stream,
};
