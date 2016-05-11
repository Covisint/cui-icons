var fs = require('fs');
var zlib = require('zlib');

//creates svgList file
var icons=fs.readdirSync('src/resources/icons');
var logos=fs.readdirSync('src/resources/logos');
var fontAwesome=fs.readdirSync('src/resources/font-awesome');
if(icons.indexOf('.DS_Store')>-1){
	icons.splice(icons.indexOf('.DS_Store'),1);
}
if(logos.indexOf('.DS_Store')>-1){
	logos.splice(logos.indexOf('.DS_Store'),1);
}
if(fontAwesome.indexOf('.DS_Store')>-1){
    fontAwesome.splice(logos.indexOf('.DS_Store'),1);
}

fs.writeFileSync('iconList',icons);
fs.writeFileSync('logoList',logos);
fs.writeFileSync('fontAwesomeList',fontAwesome);

//gzips the output svgs
var gzip = zlib.createGzip();
var iconsIn = fs.createReadStream('dist/icons/icons-out.svg');
var iconsOut = fs.createWriteStream('dist/icons/icons-out.svg.gz');
iconsIn.pipe(gzip).pipe(iconsOut);

var logosIn = fs.createReadStream('dist/logos/logos-out.svg');
var logosOut = fs.createWriteStream('dist/logos/logos-out.svg.gz');
logosIn.pipe(gzip).pipe(logosOut);

var fontAwesomeIn = fs.createReadStream('dist/font-awesome/font-awesome-out.svg');
var fontAwesomeOut = fs.createWriteStream('dist/font-awesome/font-awesome-out.svg.gz');
fontAwesomeIn.pipe(gzip).pipe(fontAwesomeOut);