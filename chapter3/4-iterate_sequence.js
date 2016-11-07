// Page 85

// What if do we require to perform different asynchronous tasks in sequence?
// Instead of continously passing the callback function we can just iterate each one of them separately within an array

// All functions defined must have a callback as parameter. So that we can know when the function finishes
function async1(callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 1 after 2 sec!");
    callback();
  }, 2000);
}

function async2(callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 2 after 1 sec!");
    callback();
  }, 1000);
}

function async3(callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 3 after 4 sec!");
    callback();
  }, 4000);
}

function async4(callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 4 after 3 sec!");
    callback();
  }, 3000);
}

// We need to store all our functions within in array
var tasks = [async1, async2, async3, async4];

// We will iterate over this array as if it were a collection
function iterate(index) {
  if(index < tasks.length) {
    // Our callback function will be our next indexed task
    tasks[index](function (){
      iterate(index + 1);
    });
  }
}

// Triggering our iterator with the first index
iterate(0)
