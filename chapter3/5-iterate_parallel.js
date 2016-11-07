
// What if we want to iterate the async calls concurrently?
// We can achieve this behaviour by defining a done function, which will set the task as finished

// Defining our async calls
function async1(callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 1 after 1 sec!");
    callback();
  }, 1000);
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
    console.log("Async call number 3 after 3 sec!");
    callback();
  }, 3000);
}

function iterateParalell(tasks, callback) {
  var tasks_done = 0;

  // This is the done function we're going to use as callback for each async call
  function done() {
    // Every time a task is done we're going to increment this counter
    tasks_done++;
    // If we reach the total of calls finished we can run our final callback, which we receive as one of the params
    if (tasks_done === tasks.length) {
      callback();
    }
  }
  //Iterating over our tasks array
  tasks.forEach(function (task) {
    // Executing our tasks. Every task will take the done function as callback
    task(done);
  });
}

// Storing our async functions into an array
var tasks = [async1, async2, async3];

// Initializing our parallel iterator
iterateParalell(tasks, function () {
  //This will be executed once all the async tasks are completed
  console.log("All tasks are done!");
});
