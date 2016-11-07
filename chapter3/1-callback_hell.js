// Page 73

// An easy to understand example of callback hell

function async1(callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 1!");
    callback();
  }, 1000);
}

function async2(callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 2!");
    callback();
  }, 1000);
}

function async3(callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 3!");
    callback();
  }, 1000);
}

function async4(callback) {
  setTimeout(function () {
    // Do something here!
    console.log("Async call number 4!");
    callback();
  }, 1000);
}

// Here we start nesting callback calls... Notice how the pyramid of doom is formed
async1(function () {
  async2(function () {
    async3(function () {
      async4(function () {
        console.log("AND THIS IS CALLBACK HELL!!!")
      })
    })
  })
})
