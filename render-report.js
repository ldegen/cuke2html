var marked = require('marked');
var jade = require('jade');
var fs = require("fs");

module.exports = function(templateFile, reportData) {

  var fn = jade.compileFile(templateFile);

  var html = fn({
    features: reportData,
    markdown: marked
  });

  return html;
}
