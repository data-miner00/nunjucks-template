var cssmin = require("./cssmin");
var nunjucks = require("./nunjucks");
var { manual, promise, stream } = require("./tutorial");
var uglify = require("./uglify");

module.exports = {
  nunjucks,
  cssmin,
  uglify,
  manual,
  promise,
  stream,
};
