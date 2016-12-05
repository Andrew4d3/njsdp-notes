const RandomStream = require('./random_stream');
// Creating instance of a readable stream
const randomStream = new RandomStream();

randomStream.on('readable', () => {
  let chunk;
  // As long there is not null in the stream we will check if there's new data
  while((chunk = randomStream.read()) !== null) {
    // Printing data received
    console.log(`Chunk received: ${chunk.toString()}`);
  }
});
