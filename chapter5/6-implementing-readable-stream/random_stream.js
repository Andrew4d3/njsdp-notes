// Page 151

const stream = require('stream');
const Chance = require('chance');

const chance = new Chance();

class RandomStream extends stream.Readable {
  constructor(options) {
    // Initializing our parent class
    super(options);
  }
  _read(size) {
    // Generating Random String
    const chunk = chance.string();
    console.log(`Pushing chunk of size: ${chunk.length}`);
    // Since we're pushing a string we need to specify the encoding "utf8"
    this.push(chunk, 'utf8');
    // Randomly, we look for stopping the stream reader by assinging 5% of chances
    if(chance.bool({likelihood: 5})) {
      // This stops the Readable stream
      this.push(null);
    }
  }
}

module.exports = RandomStream;
