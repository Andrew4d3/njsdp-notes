// Page 128

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

co(function *(){
  console.log("Using Promise.all(...) we can have multiple async tasks running concurrently...")
  const tasks = [async1, async2, async3, async4];
  yield Promise.all(tasks.map((task) => task()));
  console.log("All parallel tasks are completed!");
}).catch(function(err) {
  // Uncaught Error...
  console.log(err, "Uncaught error...");
});
