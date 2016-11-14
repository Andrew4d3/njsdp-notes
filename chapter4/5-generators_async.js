// Page 122

// This is not the example explained at the book. This is way more simple to understand

function *mainGenerator(){
  console.log("Starting our main function");
  let random = yield wait2Sec();
  console.log("The number generated is " + random);
  // Waiting 2 seconds more
  ramdon = yield wait2Sec();
  console.log("The number generated is " + random);
}


function wait2Sec() {
  setTimeout(function () {
    console.log("waiting 2 seconds...");
    var random = parseInt(Math.random()*10);
    // Returning a random numer generated witin an async function to the generator...
    main.next(random);
  }, 2000);
}

const main = mainGenerator();
// Start everything....
main.next();
