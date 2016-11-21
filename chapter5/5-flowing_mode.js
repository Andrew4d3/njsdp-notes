// Page 150

process.stdin
  .on('data', (chunk) => { // Ataching the data listener to handle the data chunks
    console.log('New Data available');
    console.log(`Chunk read: (${chunk.length} "${chunk.toString()}")`);
  })
  .on('end', () => process.stdout.write('End of stream'));
