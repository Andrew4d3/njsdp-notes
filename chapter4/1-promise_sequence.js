Promise = require('bluebird');

const async1 = Promise.promisify(function (callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 1 after 2 sec!");
    callback();
  }, 2000);
});

const async2 = Promise.promisify(function (callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 2 after 1 sec!");
    callback();
  }, 1000);
});

const async3 = Promise.promisify(function (callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 3 after 4 sec!");
    callback();
  }, 4000);
});

const async4 = Promise.promisify(function (callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 4 after 3 sec!");
    callback();
  }, 3000);
});

console.log("Running async functions in sequence")
async1()
  .then(() => async2())
  .then(() => async3())
  .then(() => async4())
  .then(() => {
    console.log("END!");
  });
