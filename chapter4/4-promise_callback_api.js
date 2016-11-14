// Page 117

// We can choose between using callbacks or promises
// But we can also provide enough flexibitliy to include both...

Promise = require('bluebird');

const searchNumber = function (toFind, callback) {
  var steps = 0;
  console.log("Initializing search of number: " + toFind);

  return new Promise((resolve, reject) => {
    var interval = setInterval(function () {
      steps ++;
      var generated = parseInt(Math.random()*10);
      console.log("Number generated: " + generated)
      if (generated === toFind){
        clearInterval(interval);
        if(callback) callback(null, { generated, steps });
        resolve({ generated, steps });
      }
    }, 1000);
  });
};

searchNumber(5, function (error, result) {
  console.log(result, "Getting the result within a callback");
});

searchNumber(2)
.then(function (result) {
  console.log(result, "Getting the result within a promise");
});
