// Page 25

// There are 2 ways to resolve the problem with unpredictable functions
// First it's defining the function's working as entirely synchronous
//
function processNumber1(number, callback) {
  if (number !== 2) {
    // If we don't find anything is handled synchronously
    console.log(number + " is not 2");
    callback(false);
  } else {
    // Not async calls anymore
    console.log(number + " is 2");
    callback(true);
  }
}


var foundTwo = false;
var i = 1;
console.log("Now everything is sync!")
while (!foundTwo && i <= 10) {
  processNumber1(i, function (result) {
    foundTwo = result
  });
  i += 1;
}

// Nevertheless, this is not always possible...

// Page 26

// Second form is defining everything as synchronous using process.nextTick. THis is node method
function processNumber2(number, callback) {
  if (number !== 2) {
    // If we don't find anything, this is handled asynchronously
    setImmediate(function() {
      console.log(number + " is not 2");
      callback(false);
    });
  } else {
    // Our found element is handled asynchronously
    setImmediate(function() {
      console.log(number + " is 2");
      callback(true);
    })
  }
}


foundTwo = false;
i = 1;
console.log("Now everything is async!")
while (!foundTwo && i <= 10) {
  processNumber2(i, function (result) {
    foundTwo = result
  });
  i += 1;
}

// However, this is gonna go on until 10. Even though it found 2.
// Reason is foundTwo is evaluated synchronously
