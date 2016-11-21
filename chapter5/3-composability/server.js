// Page 147

const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const crypto = require('crypto');

const server = http.createServer((req, res) => {
  const filename = req.headers.filename;
  console.log('File request received: ' + filename);

  req
    .pipe(crypto.createDecipher('aes192', 'a_shared_secret')) // Decrypting our chunk...
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(filename))
    .on('finish', () => {
      res.writeHead(201, { 'Content-type': 'text/plain' });
      res.end('That\'s it!\n');
      console.log(`File saved: ${filename}\nThe file must be on the folder`);
    });
});

server.listen(3000, () => console.log('Server is listening...'));
