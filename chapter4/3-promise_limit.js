// Page 115

// The book takes a different approach with this.
// Here, what I'm doing is using the "concurrency" option attr from the bluebird's map method.

Promise = require('bluebird');

const searchNumber = Promise.promisify(function (toFind, callback) {
  var steps = 0;
  console.log("Initializing search of number: " + toFind);
  var interval = setInterval(function () {
    steps ++;
    var generated = parseInt(Math.random()*10);
    console.log("Number generated: " + generated)
    if (generated === toFind){
      clearInterval(interval);
      callback(null, { generated, steps });
    }
  }, 1000);
});

// Be aware this doesn't have the same functionaltiy the TaskQueue has. That one follows a queue paradigm. This one doesn't.

Promise.map([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], (number) => searchNumber(number), { concurrency: 2 })
.then(function (results) {
  console.log(results);
});
