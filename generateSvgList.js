var fs = require('fs');
var zlib = require('zlib');

//creates svgList file
var icons=fs.readdirSync('src/resources/icons');
var logos=fs.readdirSync('src/resources/logos');
if(icons.indexOf('.DS_Store')>-1){
	icons.splice(icons.indexOf('.DS_Store'),1);
}
if(logos.indexOf('.DS_Store')>-1){
	logos.splice(logos.indexOf('.DS_Store'),1);
}

fs.writeFileSync('iconList',icons);
fs.writeFileSync('logoList',logos);

//gzips the output svgs
var gzip = zlib.createGzip();
var iconsIn = fs.createReadStream('dist/icons/icons-out.svg');
var iconsOut = fs.createWriteStream('dist/icons/icons-out.svg.gz');
iconsIn.pipe(gzip).pipe(iconsOut);

var logosIn = fs.createReadStream('dist/logos/logos-out.svg');
var logosOut = fs.createWriteStream('dist/logos/logos-out.svg.gz');
logosIn.pipe(gzip).pipe(logosOut);