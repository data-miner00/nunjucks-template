var gulp = require("gulp");
var nunjucks = require("gulp-nunjucks-render");
var data = require("gulp-data");
var through2 = require("through2");
var prettier = require("prettier");
var concat = require("gulp-concat");
var cssmin = require("gulp-clean-css");

var prettierConfig = require("./.prettierrc.json");

function gulpPrettier(file, enc, callback) {
  if (!file.isBuffer()) {
    callback(null, file);
    return;
  }

  prettier
    .format(file.contents.toString(), { ...prettierConfig, parser: "html" })
    .then((contents) => {
      file.contents = Buffer.from(contents);
      callback(null, file);
    });
}

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
    .pipe(
      nunjucks({
        path: ["src/templates"],
        ext: ".html",
        manageEnv,
        envOptions: {
          autoescape: false,
          trimBlocks: true,
          lstripBlocks: true,
        },
      })
    )
    .pipe(through2.obj(gulpPrettier))
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

gulp.task("cssmin", function () {
  return gulp
    .src(["src/styles/**/*.css"])
    .pipe(concat("styles.css"))
    .pipe(cssmin({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.parallel("nunjucks", "cssmin", "manual"));
