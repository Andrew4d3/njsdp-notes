// Page 22

// We need to be careful with functions having mixed behaviors (both sync and async)
function processNumber(number, callback) {
  if (number !== 2) {
    // If we don't find anything is handled synchronously
    console.log(number + " is not 2");
    callback(false);
  } else {
    // Our found element is handled asynchronously
    setTimeout(function() {
      console.log(number + " is 2");
      callback(true);
    }, 1)
  }
}


var foundTwo = false;
var i = 1;
console.log("This while loop should break on the second step but it goes on until it reaches 10")
while (!foundTwo && i <= 10) {
  processNumber(i, function (result) {
    foundTwo = result
  });
  i += 1;
}
