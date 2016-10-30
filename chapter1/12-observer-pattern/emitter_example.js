// Page 50

// This does not follow the same aproach described by the book.
// Instead, it's using the ES6 class and extends keywords to get language level inheritance support

var EventEmitter = require('events');

class NumberProcessor extends EventEmitter {
  constructor() {
    super();
  }
  run() {
    var self = this;
    setInterval(function () {
      var numb = parseInt(Math.random()*1000);
      if (numb % 2 == 0) {
        self.emit('even', numb);
      }
      else {
        self.emit('odd', numb);
      }
    }, 2000);
  }
}

var numberProcessor = new NumberProcessor();
numberProcessor.on('even', function (numb) {
  console.log(numb + " is even");
});

numberProcessor.on('odd', function (numb) {
  console.log(numb + " is odd");
});

numberProcessor.run();
