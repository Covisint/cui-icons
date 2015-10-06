var fs = require('fs');

var files=fs.readdirSync('svg_upload');
fs.writeFileSync('svgList',files);
