// Page 146

const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
const file = '../image.jpg';
const crypto = require('crypto');

const options = {
  hostname: 'localhost',
  port: '3000',
  path: '/',
  method: 'PUT',
  headers: {
    filename: path.basename(file),
    'Content-Type': 'application/octet-stream',
    'Content-Encoding': 'gzip'
  }
};

const req = http.request(options, (res) => {
  console.log('Server response: ' + res.statusCode);
});

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  // Encrypting our compressed chunk...
  .pipe(crypto.createCipher('aes192', 'a_shared_secret'))
  .pipe(req)
  .on('finish', () => {
    console.log('File successfully sent!');
  });
