// Page 143

const zlib = require('zlib');
const fs = require('fs');

fs.createReadStream('./image.jpg')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('image.jpg.gz'))
  .on('finish', () => console.log("Finished!"));
