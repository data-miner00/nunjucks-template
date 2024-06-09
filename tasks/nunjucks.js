var gulp = require("gulp");
var nunjucksRender = require("gulp-nunjucks-render");
var prettier = require("prettier");
var through2 = require("through2");
var data = require("gulp-data");

var prettierConfig = require("../.prettierrc.json");

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

var nunjucks = function () {
  return gulp
    .src("src/*")
    .pipe(
      data(function (file) {
        return require("../settings.json");
      })
    )
    .pipe(
      nunjucksRender({
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
};

module.exports = nunjucks;
