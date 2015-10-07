var fs = require('fs');
var zlib = require('zlib');

//creates svgList file
var files=fs.readdirSync('src/resources/svg');
fs.writeFileSync('svgList',files);

//gzips the outputsvg
var gzip = zlib.createGzip();
var inp = fs.createReadStream('dist/svg/svg-out.svg');
var out = fs.createWriteStream('dist/svg/svg-out.svg.gz');
inp.pipe(gzip).pipe(out);