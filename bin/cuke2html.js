#!/usr/bin/env node

var fs = require("fs");
var render = require('../render-report');
var optimist= require('optimist')
  .usage("render cucumber reports\n$0 <json file>")
  .describe('t', "use a custom jade template");

var argv = optimist.argv;

if (argv._.length < 1) {
  console.error("please give me some json file to chew on")
  optimist.showHelp();
  process.exit(-1);
}

if (argv.t) {
  var templateFile = argv.t;
} else {
  var templateFile = __dirname + "/../report.jade";
}

var data = JSON.parse(fs.readFileSync(argv._[0]));

var html = render(templateFile, data)
console.log(html);
