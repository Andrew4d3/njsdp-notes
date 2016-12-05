// Page 154

const Chance = require('chance');
const chance = new Chance();

// Creating a web server to start listenting to HTTP requests
require('http').createServer((req, res) => {
  // Writting our HTT headers
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Setting a 95% of chances to enter a new step of this while loop
  while(chance.bool({likelihood: 95})) {
    // If we enter, a new random string should be written on the writabble stream
    res.write(chance.string() + '\n');
  }
  // To finish the stream...
  res.end('\nThe end...\n');
  // Listening to the finished event to just display a message through console
  res.on('finish', () => console.log('All data was sent')); //[5]
})
// Listening to request on port 8080
.listen(8080, () => console.log('Listening on http://localhost:8080'));
