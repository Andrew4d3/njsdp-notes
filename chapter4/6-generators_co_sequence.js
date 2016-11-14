// Page 126

Promise = require('bluebird');
const co = require('co');

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

const notFour = Promise.promisify(function (number, callback) {
  setTimeout(function () {
    // Do something here!
    if (number === 4){
      const error = new Error('ERROR: The number is 4');
      return callback(error);
    }
    callback(null, true);
  }, 1000);
});

co(function *(){
  console.log("Running async calls in sequence using generators");
  yield async1();
  yield async2();
  yield async3();
  yield async4();
  console.log("Done!");
  let isNotFour = yield notFour(2);
  console.log(isNotFour, "<--- is not 4?");
  // We can use try-catch blocks with this approach
  try {
    let isNotFour = yield notFour(4);
  } catch (e) {
    console.log(e, "Error found...");
  }
}).catch(function(err) {
  // Uncaught Error...
  console.log(err, "Uncaught error...");
});
