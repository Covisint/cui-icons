var fs = require('fs');

var files=fs.readdirSync('src/resources/svg');
fs.writeFileSync('svgList',files);
