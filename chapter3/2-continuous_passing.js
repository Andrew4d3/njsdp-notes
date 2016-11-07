// Page 81

// The book doesn't define this as continuous passing. But it's a term I've came across multiple times from other sources

function async1(callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 1!");
    async2(callback);
  }, 1000);
}

function async2(callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 2!");
    async3(callback);
  }, 1000);
}

function async3(callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 3!");
    async4(callback);
  }, 1000);
}

function async4(callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 4!");
    callback();
  }, 1000);
}

// Here we pass all callback function continously across all the methods
async1(function () {
    console.log("No callback hell at all...")
})
