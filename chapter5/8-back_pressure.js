// Page 155

const Chance = require('chance');
const chance = new Chance();
require('http').createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  function generateMore() {
    while(chance.bool({likelihood: 95})) {
      let shouldContinue = res.write(
        // Here we're generating a string with a length very close to the water mark limit
        // So that we have hight chances to activate the Backpressure call
        chance.string({length: (16 * 1024) - 1})
      );
      // if our readable stream returs false it means it reached its watermark level so the Backpressure step should be activated
      if(!shouldContinue) {
        console.log('Backpressure');
        // We return our function here and return a listers that's gonna be called once the drain event is triggered
        // This evant notifies that the buffer is empty again
        return res.once('drain', generateMore);
      }
    }
    res.end('\nThe end...\n',() => console.log('All data was sent'));
  }
  generateMore();
}).listen(8080, () => console.log('Listening on http://localhost:8080'));
