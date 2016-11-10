// Page 111

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

function promisifyError() {
  console.log("Promisifyng error now:");
  notFour(2)
  .then((result) => {
    console.log("Result is " + result);
    return notFour(4);
  })
  .then((result) => {
    console.log("Result is " + result);
  })
  .catch((error) => {
    console.log(error);
  })
}

console.log("Running async functions in sequence")
async1()
.then(() => async2())
.then(() => async3())
.then(() => async4())
.then(() => {
  console.log("END!");
  promisifyError();
});
