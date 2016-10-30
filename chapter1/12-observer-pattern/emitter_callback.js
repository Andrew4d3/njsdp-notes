// Page 54

// This is a personal example on how to use callbacks and event emitters combined
// It's not the same as the described on the book, but I think this one is easier to undernstand and apply

var EventEmitter = require('events');

class NumberProcessor extends EventEmitter {
  constructor() {
    super();
  }

  run(numb, timeout, callback) {
    var self = this;
    setTimeout(function () {
      console.log("Receiving: " + numb)
      if (numb % 2 == 0) {
        // Here we can include some default functionality for our main callback
        console.log("The number received is even");
        callback('even');
      }
      else {
        console.log("The number received is odd");
        callback('odd');
      }

      // Additional emmiters for optional observers would be go here. So If we receive a number 4 we can do something else...

      if (numb === 4) {
        self.emit("four")
      }

    }, timeout);
  }
}

var numberProcessor = new NumberProcessor();
// Now we can define some specific code for our "special" event
numberProcessor.on('four', function () {
  console.log("WE'VE GOT A 4!!! WU HU!!!!!");
});

// This is our default callback handler, that we're gonna use to handle our results
function callbackHandler (result) {
  console.log("The result is " + result);
}

// Only the normal callback should be invoked here...
numberProcessor.run(1, 2000, callbackHandler);
// Here our special event for the number 4 should be triggered.
// Notice I set the timeout in 4000, so that we can see the result 2 seconds after the past one
numberProcessor.run(4, 4000, callbackHandler);
